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
// =========================
// CONTACT FORM → MAILTO
// =========================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("cf-name").value.trim();
    const email = document.getElementById("cf-email").value.trim();
    const phone = document.getElementById("cf-phone").value.trim();
    const message = document.getElementById("cf-message").value.trim();
    const privacy = document.getElementById("cf-privacy").checked;

    if (!name || !email || !phone || !message || !privacy) {
      alert("Por favor completa todos los campos y acepta la política de datos.");
      return;
    }

    const subject = encodeURIComponent("Nuevo contacto desde la web – Daleon Group");
    const body = encodeURIComponent(
      `Nombre: ${name}\n` +
      `Correo: ${email}\n` +
      `Teléfono: ${phone}\n\n` +
      `Mensaje:\n${message}\n\n` +
      `Enviado desde el formulario de contacto de Daleon Group.`
    );

    // Cambia este correo si quieres otro destinatario
    const mailtoLink = `mailto:info@daleongroup.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  });
}
