<?php

namespace Drupal\menu_bootstrap_icon\Hook;

use Drupal\Component\Render\FormattableMarkup;
use Drupal\Component\Utility\Html;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Hook\Attribute\Hook;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Hook implementations for menu Bootstrap icon.
 */
class BootstrapIconHook {
  use StringTranslationTrait;

  /**
   * Implements hook_help().
   */
  #[Hook('help')]
  public function help($route_name, RouteMatchInterface $route_match) {
    switch ($route_name) {
      case 'help.page.menu_bootstrap_icon':
        $text = file_get_contents(__DIR__ . '/../../Readme.md');
        if (!\Drupal::moduleHandler()->moduleExists('markdown')) {
          return '<pre>' . Html::escape($text) . '</pre>';
        }
        else {
          // Use the Markdown filter to render the README.
          $filter_manager = \Drupal::service('plugin.manager.filter');
          $settings = \Drupal::configFactory()->get('markdown.settings')->getRawData();
          $config = ['settings' => $settings];
          $filter = $filter_manager->createInstance('markdown', $config);
          return $filter->process($text, 'en');
        }

      default:
        break;
    }
    return FALSE;
  }

  /**
   * Implements hook_form_BASE_FORM_ID_alter().
   *
   * #[Hook('form_menu_link_content_form_alter')]
   */
  public function formMenuLinkContentFormAlter(&$form, FormStateInterface $form_state, $form_id) : void {
    $menu_link = $form_state->getFormObject()->getEntity();
    $options = $menu_link->link->first()->options ?: [];
    $this->menuBootstrapIconForm($form, $options);
    $this->menuBootstrapIconRole($form, $options);
    $form['actions']['submit']['#submit'][] = [static::class, 'menuLinkContentFormSubmit'];
  }

  /**
   * Implements hook_form_BASE_FORM_ID_alter().
   *
   * #[Hook('form_menu_link_edit_alter')]
   */
  public function formMenuLinkLinkEditAlter(&$form, FormStateInterface $form_state, $form_id) : void {
    $options = $form_state->getBuildInfo()['args'][0]->getOptions();
    $this->menuBootstrapIconForm($form, $options);
    $this->menuBootstrapIconRole($form, $options);
    $form['#submit'][] = [static::class, 'formMenuLinkEditSubmit'];
  }

  /**
   * Adds an optional role field to menu items.
   */
  private function menuBootstrapIconRole(&$form, $options = []) {
    $form['menu_item_roles'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t('Menu Item Roles'),
      '#description' => $this->t('Set the roles allowed for this menu item.'),
      '#options' => array_map(fn(RoleInterface $role) => Html::escape($role->label()), Role::loadMultiple()),
      '#default_value' => $options['roles'] ?? [],
    ];
  }

  /**
   * User for form add/edit.
   */
  private function menuBootstrapIconForm(&$form, $options = []) {
    $config_factory = \Drupal::configFactory();
    $config = $config_factory->getEditable('menu_bootstrap_icon.settings');
    $form['bi_icon'] = [
      '#type' => 'details',
      '#title' => $this->t('Bootstrap Icon'),
      '#open' => TRUE,
    ];
    $iconDefault = !empty($options['icon']) ? $options['icon'] : '';
    $form['bi_icon']['icon'] = [
      '#type' => 'textfield',
      '#default_value' => !empty($options['icon']) ? $options['icon'] : '',
      '#prefix' => '<div class="input-group"><span class="col-sm-1 col-form-label">' . $this->t('Icon class') . '</span>',
      '#suffix' => '<span class="input-group-text"><i class="icon-preview ' . $iconDefault . '"></i></span></div>',
      '#attributes' => [
        'class' => [
          'iconpicker',
          'w-auto',
        ],
      ],
    ];

    $form['bi_icon']['icon_tag'] = [
      '#type' => 'select',
      '#title' => $this->t('HTML tag'),
      '#default_value' => !empty($options['icon_tag']) ? $options['icon_tag'] : 'i',
      '#options' => [
        'i' => 'i',
        'span' => $this->t('span'),
      ],
    ];

    $form['bi_icon']['icon_appearance'] = [
      '#type' => 'select',
      '#title' => $this->t('Appearance'),
      '#default_value' => !empty($options['icon_appearance']) ? $options['icon_appearance'] : 'before',
      '#options' => [
        'before' => $this->t('Before text'),
        'after' => $this->t('After text'),
        'only' => $this->t('Without text'),
      ],
    ];

    if ($config->get('use_cdn')) {
      $form['#attached']['library'][] = 'menu_bootstrap_icon/cdn';
    }
    $form['#attached']['library'][] = 'menu_bootstrap_icon/iconspicker';
    $searchList = base_path() . \Drupal::service('extension.list.module')->getPath('menu_bootstrap_icon') . '/js/iconSearch.json';
    $form['#attached']['drupalSettings']['menu_bootstrap_icon']['icons'] = $searchList;
  }

  /**
   * Process the submitted form.
   *
   * @param array $form
   *   Form Array.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   Form State Interface.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  protected function menuLinkContentFormSubmit(array $form, FormStateInterface $form_state) {
    $icon_field = $form_state->getValue('icon');
    $icon_tag = $form_state->getValue('icon_tag');
    $icon_appearance = $form_state->getValue('icon_appearance');
    $roles = array_filter($form_state->getValue('menu_item_roles') ?? []);

    $options = [
      'icon' => !empty($icon_field) ? Html::escape($icon_field) : '',
      'icon_tag' => !empty($icon_tag) ? Html::escape($icon_tag) : 'i',
      'icon_appearance' => !empty($icon_appearance) ? Html::escape($icon_appearance) : 'before',
      'roles' => !empty($roles) ? $roles : NULL,
    ];

    /** @var \Drupal\menu_link_content\Entity\MenuLinkContent $menu_link */
    $menu_link = $form_state->getFormObject()->getEntity();
    $menu_link_options = $menu_link->link->first()->options;

    $merged = array_merge($menu_link_options, $options);

    $menu_link->link->first()->options = $merged;
    $menu_link->save();
  }

  /**
   * Process the submitted edit form.
   *
   * @param array $form
   *   Array Form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   Form Interface.
   */
  protected function formMenuLinkEditSubmit(array $form, FormStateInterface $form_state) {
    $options = $form_state->getBuildInfo()['args'][0]->getOptions();
    $menu_link_id = $form_state->getValue('menu_link_id');

    $icon_field = $form_state->getValue('icon');
    $icon_tag = $form_state->getValue('icon_tag');
    $icon_appearance = $form_state->getValue('icon_appearance');

    $options['icon'] = !empty($icon_field) ? Html::escape($icon_field) : '';
    $options['icon_tag'] = !empty($icon_tag) ? Html::escape($icon_tag) : 'i';
    $options['icon_appearance'] = !empty($icon_appearance) ? Html::escape($icon_appearance) : 'before';

    $roles = array_filter($form_state->getValue('menu_item_roles') ?? []);
    $options['roles'] = !empty($roles) ? $roles : NULL;

    if (!empty($menu_link_id)) {
      $query = \Drupal::database()->update('menu_tree');
      $query->fields([
        'options' => serialize($options),
      ]);
      $query->condition('id', $menu_link_id);
      $query->execute();

      $config_factory = \Drupal::configFactory();
      $config = $config_factory->getEditable('menu_bootstrap_icon.settings');

      $icons = $config->get('menu_link_icons');
      // Array key cannot contain dot in the config.
      $config_key = str_replace('.', '_', $menu_link_id);

      if (empty($options['icon'])) {
        if (isset($icons[$config_key])) {
          unset($icons[$config_key]);
        }
      }
      else {
        $icons[$config_key] = [
          'icon' => $options['icon'],
          'tag' => $options['icon_tag'],
          'appearance' => $options['icon_appearance'],
          'roles' => $options['roles'],
        ];
      }

      $config->set('menu_link_icons', $icons);
      $config->save();
    }
  }

  /**
   * Implements hook_link_alter().
   *
   * #[Hook('link_alter')]
   */
  public function linkAlter(&$variables): void {
    if (!empty($variables['options']['icon']) && empty($variables['options']['already_processed'])) {
      $class = $variables['options']['icon'];
      $tag = !empty($variables['options']['icon_tag']) ? $variables['options']['icon_tag'] : 'i';
      $appearance = !empty($variables['options']['icon_appearance']) ? $variables['options']['icon_appearance'] : 'before';

      /** @var \Drupal\Core\Url $url */
      $url = $variables['url'];
      $is_link = ($url->isRouted() && ($url->getRouteName() == '<nolink>')) ? FALSE : TRUE;

      switch ($appearance) {
        case "only":
          if ($is_link) {
            $variables['options']['attributes']['aria-label'] = $variables['text'];
            $variables['text'] = new FormattableMarkup('<' . $tag . ' class="' . $class . '" aria-hidden="true"></' . $tag . '>', []);
          }
          else {
            $variables['text'] = new FormattableMarkup('<' . $tag . ' class="' . $class . '" aria-hidden="true" title="@title"></' . $tag . '><span class="sr-only">@title</span>', [
              '@title' => $variables['text'],
            ]);
          }

          break;

        case "after":
          $variables['text'] = new FormattableMarkup('@title <' . $tag . ' class="' . $class . '" aria-hidden="true"></' . $tag . '>', [
            '@title' => $variables['text'],
          ]);
          break;

        case "before":
        default:
          $variables['text'] = new FormattableMarkup('<' . $tag . ' class="' . $class . '" aria-hidden="true"></' . $tag . '> <span class="link-text">@title</span>', [
            '@title' => $variables['text'],
          ]);
          break;
      }

      $variables['options']['already_processed'] = TRUE;
    }
    $currentRoles = \Drupal::currentUser()->getRoles();
    if (!in_array('administrator', $currentRoles) &&
      !empty($variables["options"]["roles"]) &&
      empty(array_intersect($currentRoles, array_keys($variables["options"]["roles"])))) {
      $variables['access'] = FALSE;
      $variables['options']['attributes']['class'][] = 'js-hide';
      $variables['options']['attributes']['disabled'] = 'disabled';
    }
  }

  /**
   * Implements hook_menu_links_discovered_alter().
   *
   * #[Hook('menu_links_discovered_alter')]
   */
  public function menuLinksDiscoveredAlter(&$links): void {
    // After clearing the site's cache, the options were cleared from the
    // menu_tree database table (I'm not sure if this is a bug or normal
    // behaviour)... but we need to re-apply icon on each menu link item.
    $config = \Drupal::config('menu_bootstrap_icon.settings');
    $icons = $config->get('menu_link_icons');

    foreach ($links as $link_id => &$link) {
      if (empty($link['id'])) {
        continue;
      }

      // Array key cannot contain dot in the config.
      $config_key = str_replace('.', '_', $link_id);

      if (!empty($icons[$config_key])) {
        $link['options']['icon_tag'] = !empty($icons[$config_key]['tag']) ? $icons[$config_key]['tag'] : 'i';
        $link['options']['icon_appearance'] = !empty($icons[$config_key]['appearance']) ? $icons[$config_key]['appearance'] : 'before';
        $link['options']['icon'] = !empty($icons[$config_key]['icon']) ? $icons[$config_key]['icon'] : $icons[$config_key];
      }
    }
  }

}
