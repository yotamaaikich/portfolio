(() => {
  const transitionKey = "aikichin-portfolio-page-transition";
  const pageTransition = document.createElement("div");
  pageTransition.className = "page-transition";
  pageTransition.setAttribute("aria-hidden", "true");
  pageTransition.innerHTML = '<div class="page-transition-window"><div class="page-transition-titlebar"><span>AIKICHIN PORTFOLIO</span><span aria-hidden="true">▰</span></div><div class="page-transition-content"><span class="page-transition-mark" aria-hidden="true">▣</span><div><strong>Loading page...</strong><span>PLEASE WAIT / SYSTEM READY</span></div></div><div class="page-transition-progress"><span></span></div></div>';
  document.body.append(pageTransition);

  const showPageTransition = () => pageTransition.classList.add("is-active");
  const navigateWithTransition = (url) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.location.assign(url);
      return;
    }
    try { sessionStorage.setItem(transitionKey, "true"); } catch { /* Navigation still works without storage. */ }
    showPageTransition();
    window.setTimeout(() => window.location.assign(url), 420);
  };

  let arrivingFromPage = false;
  try {
    arrivingFromPage = sessionStorage.getItem(transitionKey) === "true";
    sessionStorage.removeItem(transitionKey);
  } catch { /* Skip the arrival animation when storage is unavailable. */ }
  if (arrivingFromPage) {
    showPageTransition();
    window.setTimeout(() => pageTransition.classList.remove("is-active"), 260);
  }

  // Browsers can restore the previous page from the back-forward cache with
  // its outgoing overlay still visible. Always clear that stale state on return.
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    pageTransition.classList.remove("is-active");
    try { sessionStorage.removeItem(transitionKey); } catch { /* Nothing else is needed. */ }
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute("download")) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || !/\.html?$/i.test(destination.pathname) || (destination.pathname === window.location.pathname && !destination.search)) return;
    event.preventDefault();
    navigateWithTransition(destination.href);
  });

  const startup = document.querySelector("#startup-screen");
  if (startup) {
    const skipButton = startup.querySelector("[data-startup-skip]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sessionKey = "aikichin-portfolio-started";
    let alreadyStarted = false;

    try {
      alreadyStarted = sessionStorage.getItem(sessionKey) === "true";
      if (!alreadyStarted && !reducedMotion) sessionStorage.setItem(sessionKey, "true");
    } catch {
      // If session storage is unavailable, the intro still works for this page.
    }

    const finishStartup = () => {
      startup.classList.add("is-finished");
      window.setTimeout(() => startup.remove(), 600);
    };

    if (alreadyStarted || reducedMotion) {
      startup.remove();
    } else {
      skipButton?.addEventListener("click", finishStartup, { once: true });
      window.setTimeout(finishStartup, 4000);
    }
  }

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

  const terminalForm = document.querySelector("[data-terminal-form]");
  if (terminalForm) {
    const terminalCard = terminalForm.closest(".terminal-card");
    const commandInput = terminalForm.querySelector(".terminal-input");
    const response = document.querySelector("[data-terminal-response]");
    let matrixTimer;

    const showResponse = (command, message) => {
      response.replaceChildren();
      response.hidden = false;

      if (command) {
        const echo = document.createElement("p");
        echo.className = "terminal-echo";
        echo.textContent = `yotamaaikich@portfolio:~$ ${command}`;
        response.append(echo);
      }

      if (message) {
        const result = document.createElement("p");
        result.className = "terminal-result-line";
        result.textContent = message;
        response.append(result);
      }
    };

    const jumpTo = (id, message) => {
      const target = document.getElementById(id);
      if (!target) {
        showResponse("", "destination not found.");
        return;
      }

      showResponse(commandInput.value.trim(), message);
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
      target.classList.remove("terminal-jump-highlight");
      void target.offsetWidth;
      target.classList.add("terminal-jump-highlight");
      window.setTimeout(() => target.classList.remove("terminal-jump-highlight"), 1450);
    };

    terminalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const command = commandInput.value.trim().toLowerCase();
      if (!command) return;

      terminalCard.classList.remove("is-matrix");
      switch (command) {
        case "help":
          showResponse(command, "commands: whoami / ls / projects / cafeteria / calendar / profile / contact / matrix / clear");
          break;
        case "whoami":
          showResponse(command, "@yotamaaikich — student developer");
          break;
        case "ls":
          showResponse(command, "projects/  profile/  contact/");
          break;
        case "projects":
          jumpTo("projects", "opening projects/ …");
          break;
        case "cafeteria":
          jumpTo("project-cafeteria", "opening cafeteria project …");
          break;
        case "calendar":
          jumpTo("project-task-calendar", "opening task calendar …");
          break;
        case "profile":
        case "about":
          jumpTo("profile", "opening profile/ …");
          break;
        case "contact":
          showResponse(command, "opening contact/ …");
          window.setTimeout(() => navigateWithTransition("contact.html"), 400);
          break;
        case "matrix": {
          showResponse(command, "initializing green mode … system ready.");
          void terminalCard.offsetWidth;
          terminalCard.classList.add("is-matrix");
          window.clearTimeout(matrixTimer);
          matrixTimer = window.setTimeout(() => terminalCard.classList.remove("is-matrix"), 1000);
          break;
        }
        case "clear":
          response.replaceChildren();
          response.hidden = true;
          break;
        default:
          showResponse(command, `command not found: ${command}. Type "help" for commands.`);
      }

      commandInput.value = "";
      commandInput.focus({ preventScroll: true });
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
