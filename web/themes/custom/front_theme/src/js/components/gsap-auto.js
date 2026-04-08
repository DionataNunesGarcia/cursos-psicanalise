import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

(function () {
  "use strict";

  // ===============================
  // CONFIGURAÇÕES
  // ===============================
  const animations = {
    "fade-up":   { y: 60, opacity: 0 },
    "fade-left": { x: -60, opacity: 0 },
    "zoom":      { scale: 0.9, opacity: 0 },
    "scale":     { scale: 0.8, opacity: 0 }
  };

  // ===============================
  // AUTO APLICAR (APENAS ELEMENTOS PRINCIPAIS)
  // ===============================
  function autoApplyAttributes() {
    const containers = document.querySelectorAll(".auto-animate");

    containers.forEach(container => {
      const elements = container.querySelectorAll(
        "h1, h2, h3, img, button, a"
      );

      elements.forEach((el, i) => {
        // não sobrescreve se já tiver classe manual
        if (el.className.includes("animate-")) return;

        let anim = "fade-up";

        if (el.tagName === "H1") anim = "fade-up";
        else if (el.tagName === "H2") anim = "fade-left";
        else if (el.tagName === "H3") anim = "fade-up";
        else if (el.tagName === "IMG") anim = "zoom";
        else if (el.tagName === "BUTTON" || el.tagName === "A") anim = "scale";

        el.classList.add(`animate-${anim}`);

        // pequeno stagger automático
        el.style.transitionDelay = `${i * 0.05}s`;
      });
    });
  }

  // ===============================
  // PREPARAR ELEMENTOS
  // ===============================
  function prepareElements() {
    Object.keys(animations).forEach(type => {
      const elements = document.querySelectorAll(`.animate-${type}`);

      elements.forEach(el => {
        gsap.set(el, animations[type]);
      });
    });
  }

  // ===============================
  // ANIMAÇÃO COM BATCH (PERFORMANCE)
  // ===============================
  function initBatchAnimations() {
    Object.keys(animations).forEach(type => {
      const selector = `.animate-${type}`;

      ScrollTrigger.batch(selector, {
        start: "top 92%",

        onEnter: batch => {
          gsap.to(batch, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: true
          });
        },

        onEnterBack: batch => {
          gsap.to(batch, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08
          });
        },

        once: true
      });
    });
  }

  // ===============================
  // FALLBACK (SEGURANÇA)
  // ===============================
  function initObserverFallback() {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll("[class*='animate-']").forEach(el => {
      observer.observe(el);
    });
  }

  // ===============================
  // HOVER CARDS
  // ===============================
  function hoverEffects() {
    const cards = document.querySelectorAll(".card, [class*='card']");

    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.04,
          y: -6,
          duration: 0.3
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3
        });
      });
    });
  }

  // ===============================
  // PARALLAX
  // ===============================
  function parallax() {
    const heroImg = document.querySelector(".banner img, .hero img");

    if (!heroImg) return;

    gsap.to(heroImg, {
      y: 120,
      ease: "none",
      scrollTrigger: {
        trigger: heroImg,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // ===============================
  // INIT
  // ===============================
  function init() {
    autoApplyAttributes(); // 👈 automático controlado

    prepareElements();
    initBatchAnimations();
    initObserverFallback();
    hoverEffects();
    parallax();

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    console.log("✨ Auto Animate (leve e estável) iniciado");
  }

  // DOM READY
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // API GLOBAL (Drupal AJAX)
  window.AutoAnimate = {
    refresh() {
      ScrollTrigger.refresh();
    }
  };

})();