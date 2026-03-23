document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.pathname;

  document.querySelectorAll("nav a").forEach((link) => {
    // 👉 ignora links vazios ou #
    if (!link.getAttribute("href") || link.getAttribute("href") === "#") {
      return;
    }

    const linkPath = new URL(link.href).pathname;

    // 👉 ignora root sozinho
    if (linkPath === "/") {
      if (currentUrl === "/") {
        link.classList.add("text-orange-500", "font-semibold");
      }
      return;
    }

    // 👉 match correto
    if (currentUrl === linkPath || currentUrl.startsWith(linkPath + "/")) {
      link.classList.add("text-orange-500", "font-semibold");

      const li = link.closest("li");
      if (li) {
        li.classList.add("active");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const spans = hamburger.querySelectorAll("span");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");

    // animação do X
    spans[0].classList.toggle("rotate-45");
    spans[0].classList.toggle("translate-y-1.5");
    spans[1].classList.toggle("opacity-0");
    spans[2].classList.toggle("-rotate-45");
    spans[2].classList.toggle("-translate-y-1.5");
  });

  const menuItems = document.querySelectorAll("nav li");

  menuItems.forEach((item) => {
    const submenu = item.querySelector("ul");

    // 👉 Se tem submenu
    if (submenu) {
      item.classList.add("has-dropdown");

      // 👉 cria arrow
      const link = item.querySelector("a");

      const arrow = document.createElement("span");
      arrow.innerHTML = "▾";
      arrow.classList.add("ml-1", "text-xs", "transition-transform");

      link.appendChild(arrow);

      // 👉 estado inicial
      submenu.classList.add("hidden");

      // 👉 CLICK (mobile + desktop)
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const isOpen = submenu.classList.contains("open");

        // fecha todos
        document.querySelectorAll(".dropdown.open").forEach((el) => {
          el.classList.remove("open");
          el.classList.add("hidden");
        });

        document.querySelectorAll(".has-dropdown span").forEach((el) => {
          el.classList.remove("rotate-180");
        });

        // abre atual
        if (!isOpen) {
          submenu.classList.remove("hidden");
          submenu.classList.add("open");

          arrow.classList.add("rotate-180");
        }
      });

      // 👉 HOVER (desktop)
      item.addEventListener("mouseenter", () => {
        if (window.innerWidth > 768) {
          submenu.classList.remove("hidden");
        }
      });

      item.addEventListener("mouseleave", () => {
        if (window.innerWidth > 768) {
          submenu.classList.add("hidden");
        }
      });
    }
  });

  // 👉 fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".dropdown").forEach((el) => {
        el.classList.add("hidden");
        el.classList.remove("open");
      });

      document.querySelectorAll(".has-dropdown span").forEach((el) => {
        el.classList.remove("rotate-180");
      });
    }
  });
});
