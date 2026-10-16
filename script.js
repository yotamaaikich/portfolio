(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      const symbol = toggle.querySelector("span");
      if (symbol) symbol.textContent = isOpen ? "＋" : "－";
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
