document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('course-subscription-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggers = document.querySelectorAll('.modal-subscription-trigger');

  // Abrir modal
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      if (modal) modal.classList.remove('hidden');
    });
  });

  // Fechar modal
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.classList.add('hidden');
    });
  }

  // Fechar clicando fora do modal
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
});