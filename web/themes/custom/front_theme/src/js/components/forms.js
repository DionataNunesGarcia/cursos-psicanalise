document.addEventListener("DOMContentLoaded", function() {
  // Selecione a div que envolve o botão de submit
  const submitDiv = document.querySelector("#edit-actions");

  // Selecione o botão de submit
  const submitButton = document.querySelector("#edit-actions-submit");

  // Aplique as classes CSS da div ao botão de submit
  submitButton.classList.add(
    "w-full", "px-4", "py-4", "bg-emerald-800", "text-white", 
    "tracking-wide", "hover:bg-emerald-900", "transition-colors", 
    "text-center", "text-1xl"
  );

  // Adicione o evento de clique na div
  submitDiv.addEventListener("click", function() {
    // Dispara o clique no botão de submit
    submitButton.click();
  });
});