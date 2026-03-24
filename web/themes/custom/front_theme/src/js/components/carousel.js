import Swiper from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".testimonials-swiper");

  if (!swiperEl) return;

  const slides = swiperEl.querySelectorAll(".swiper-slide");

  new Swiper(swiperEl, {
    modules: [Navigation, Pagination, Autoplay],

    slidesPerView: 1,
    spaceBetween: 30,

    loop: slides.length > 3,

    autoplay:
      slides.length > 1
        ? {
            delay: 4000,
          }
        : false,

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
});
