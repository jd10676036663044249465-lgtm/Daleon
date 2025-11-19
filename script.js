// Toggle del menú móvil
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}

// Cerrar menú al hacer click en un enlace (en móvil)
const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
    }
  });
});