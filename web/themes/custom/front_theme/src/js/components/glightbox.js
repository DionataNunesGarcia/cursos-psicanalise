import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

let lightbox = null;

function initLightbox() {
  if (lightbox) {
    lightbox.destroy();
  }

  lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    zoomable: true,
  });

  lightbox.on("open", () => {
    if (document.activeElement) {
      document.activeElement.blur();
    }

    const modal = document.querySelector(".glightbox-container");
    if (modal) {
      modal.focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", initLightbox);
