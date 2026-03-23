(() => {
  // src/js/layout/header.js
  document.addEventListener("DOMContentLoaded", function() {
    const currentUrl = window.location.pathname;
    document.querySelectorAll("nav a").forEach((link) => {
      if (!link.getAttribute("href") || link.getAttribute("href") === "#") {
        return;
      }
      const linkPath = new URL(link.href).pathname;
      if (linkPath === "/") {
        if (currentUrl === "/") {
          link.classList.add("text-orange-500", "font-semibold");
        }
        return;
      }
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
    const menuItems = document.querySelectorAll("nav li");
    menuItems.forEach((item) => {
      const submenu = item.querySelector("ul");
      if (submenu) {
        item.classList.add("has-dropdown");
        const link = item.querySelector("a");
        const arrow = document.createElement("span");
        arrow.innerHTML = "\u25BE";
        arrow.classList.add("ml-1", "text-xs", "transition-transform");
        link.appendChild(arrow);
        submenu.classList.add("hidden");
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const isOpen = submenu.classList.contains("open");
          document.querySelectorAll(".dropdown.open").forEach((el) => {
            el.classList.remove("open");
            el.classList.add("hidden");
          });
          document.querySelectorAll(".has-dropdown span").forEach((el) => {
            el.classList.remove("rotate-180");
          });
          if (!isOpen) {
            submenu.classList.remove("hidden");
            submenu.classList.add("open");
            arrow.classList.add("rotate-180");
          }
        });
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
})();
