document.addEventListener("DOMContentLoaded", function() {
  const submitDiv = document.querySelector("#edit-actions");
  const submitButton = document.querySelector("#edit-actions-submit");

  // Verifica se o botão existe antes de adicionar classes
  if (submitButton) {
    submitButton.classList.add(
      "w-full",
      "px-4",
      "py-4",
      "bg-emerald-800",
      "text-white",
      "tracking-wide",
      "hover:bg-emerald-900",
      "transition-colors",
      "text-center",
      "text-1xl"
    );

    // Adiciona listener ao container somente se ele também existir
    if (submitDiv) {
      submitDiv.addEventListener("click", function() {
        submitButton.click();
      });
    }
  }
});