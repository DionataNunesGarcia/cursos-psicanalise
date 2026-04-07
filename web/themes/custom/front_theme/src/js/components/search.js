(function ($, Drupal, once) { // Adicionamos 'once' aqui
  Drupal.behaviors.searchModal = {
    attach: function (context, settings) {
      
      // A sintaxe correta no Drupal 11: once(id, seletor, contexto)
      const elements = once('initSearchIcon', '.btn-search', context);

      elements.forEach(function (btn) {
        const $btn = $(btn);
        
        // Ícone SVG de Lupa
        const svgIcon = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        `;
        
        $btn.html(svgIcon); 
        $btn.attr('aria-label', 'Pesquisar'); 

        $btn.on('click', function (e) {
          e.preventDefault();
          // Lógica para abrir a modal aqui
          console.log('Abrindo busca...');
          
          // Opção A: Se você quer disparar a modal nativa via AJAX
          const ajaxUrl = Drupal.url('search/node'); // Ou a rota do seu form
          const dialogOptions = {
            dialogClass: 'search-modal-custom',
            width: '600px',
            title: 'Pesquisar no site'
          };

          Drupal.ajax({
            url: ajaxUrl,
            dialogType: 'modal',
            dialog: dialogOptions
          }).execute();
        });
      });
    }
  };
})(jQuery, Drupal, once);