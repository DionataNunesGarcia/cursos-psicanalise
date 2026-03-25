import Swiper from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // TESTIMONIALS
  // =========================
  const testimonialEl = document.querySelector(".testimonials-swiper");

  if (testimonialEl) {
    const slides = testimonialEl.querySelectorAll(".swiper-slide");

    new Swiper(testimonialEl, {
      modules: [Navigation, Pagination, Autoplay],

      slidesPerView: 1,
      spaceBetween: 30,

      loop: slides.length > 3,

      autoplay: slides.length > 1 ? { delay: 4000 } : false,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });
  }

  // =========================
  // TEAM
  // =========================
  const teamEl = document.querySelector(".team-swiper");

  if (teamEl) {
    const slides = teamEl.querySelectorAll(".swiper-slide");

    new Swiper(teamEl, {
      modules: [Navigation, Pagination, Autoplay],

      slidesPerView: 1,
      spaceBetween: 20,

      loop: false,

      observer: false,
      observeParents: false,

      autoplay: false,

      pagination: {
        el: teamEl.querySelector(".team-pagination"),
        clickable: true,
      },

      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      },
    });
  }
});
