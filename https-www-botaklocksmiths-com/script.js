const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#primary-nav");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const regionCard = document.querySelector(".fact-card-popover");
const regionTrigger = document.querySelector(".fact-trigger");

if (regionCard && regionTrigger) {
  const closeRegionPopover = () => {
    regionCard.classList.remove("is-open");
    regionTrigger.setAttribute("aria-expanded", "false");
  };

  regionTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = regionCard.classList.toggle("is-open");
    regionTrigger.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!regionCard.contains(event.target)) {
      closeRegionPopover();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeRegionPopover();
    }
  });
}
