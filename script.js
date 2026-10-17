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
          window.setTimeout(() => window.location.assign("contact.html"), 400);
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
