<?php

namespace Drupal\link_icons\Plugin\Field\FieldFormatter;

/**
 * @file
 * Contains \Drupal\link_icons\Plugin\Field\FieldFormatter\LinkIconsFormatter.
 */

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Render\Markup;

/**
 * Plugin implementation of the 'link_icons_formatter' formatter.
 *
 * @FieldFormatter (
 *   id = "link_icons_formatter",
 *   label = @Translation("Link with service icon"),
 *   field_types = {
 *     "link"
 *   }
 * )
 */
class LinkIconsFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    return _link_icons_config_fields(
      [
        'text' => $this->getSetting('text'),
        'hideURLscheme' => $this->getSetting('hideURLscheme'),
        'order' => $this->getSetting('order'),
        'size' => $this->getSetting('size'),
        'width' => $this->getSetting('width'),
        'coloured' => $this->getSetting('coloured'),
        'shaped' => $this->getSetting('shaped'),
        'background' => $this->getSetting('background'),
      ]
    );
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = [];

    $summary[] = $this->t('Output @text text@scheme with @size size @width width @coloured @shaped icons, @background backgrounds and the icons placed @order.',
      [
        '@text' => ($this->getSetting('text') == 'none' ? 'no' : '"' . $this->getSetting('text') . '"'),
        '@scheme' => ($this->getSetting('hideURLscheme') ? ' (with scheme hidden from URLs)' : ''),
        '@order' => $this->getSetting('order'),
        '@size' => $this->getSetting('size'),
        '@width' => $this->getSetting('width'),
        '@coloured' => $this->getSetting('coloured'),
        '@shaped' => $this->getSetting('shaped'),
        '@background' => ($this->getSetting('background') == 'none' ? 'no' : 'fa-' . $this->getSetting('background')),
      ]
    );

    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'text' => 'title',
      'hideURLscheme' => TRUE,
      'order' => 'first',
      'size' => '1x',
      'width' => 'fixed',
      'coloured' => 'coloured',
      'shaped' => 'natural',
      'background' => 'none',
    ] + parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $services = \Drupal::entityTypeManager()->getStorage('link_icon_service')->loadMultiple();

    $elements = [];

    $settings = [
      'text' => $this->getSetting('text'),
      'hideURLscheme' => $this->getSetting('hideURLscheme'),
      'order' => $this->getSetting('order'),
      'size' => $this->getSetting('size'),
      'width' => $this->getSetting('width'),
      'coloured' => $this->getSetting('coloured'),
      'shaped' => $this->getSetting('shaped'),
      'background' => $this->getSetting('background'),
    ];

    // Step through the items.
    foreach ($items as $delta => $item) {
      // Return the $markup.
      $elements[$delta] = [
        '#markup' => Markup::create(_link_icons_link_markup($item->title, $item->getUrl()->toString(), $settings, $services, TRUE)),
      ];
    }

    return $elements;
  }

}
