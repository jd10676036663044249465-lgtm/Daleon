// script.js
// ====================================================================
// Daleon Group – Frontend Interactions
// - Navbar mobile
// - Contact form → mailto
// - Scroll animations (.fade-up, .reveal)
// - Solutions cards stagger
// - KPI counters
// - About parallax
// ====================================================================

document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     NAVBAR – MOBILE TOGGLE
     ========================= */
  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {
    // Abrir / cerrar menú móvil
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });

    // Cerrar al hacer click en cualquier link del menú
    const navLinks = nav.querySelectorAll(".nav-list a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (nav.classList.contains("nav-open")) {
          nav.classList.remove("nav-open");
        }
      });
    });
  }

  /* =========================
     CONTACT FORM → MAILTO
     ========================= */
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

      const mailtoLink = `mailto:sales@daleongroup.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    });
  }

  /* =========================
     SCROLL ANIMATION – .fade-up
     (para elementos que usen data-delay)
     ========================= */
  const fadeEls = document.querySelectorAll(".fade-up");

  if ("IntersectionObserver" in window && fadeEls.length) {
    const fadeObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || "0s";
            el.style.transitionDelay = delay;
            el.classList.add("is-visible");
            obs.unobserve(el); // solo una vez
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeEls.forEach((el) => fadeObserver.observe(el));
  }

  /* =========================
     SOLUTIONS – CARDS SCROLL REVEAL
     (#branches .cards-grid-4 .card)
     ========================= */
  const solutionCards = document.querySelectorAll("#branches .cards-grid-4 .card");
  if (solutionCards.length) {
    const grid = document.querySelector("#branches .cards-grid-4");

    if (grid) {
      const solObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Efecto stagger: una card tras otra
              solutionCards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add("is-visible");
                }, index * 140);
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );

      solObserver.observe(grid);
    }
  }

  /* ========================
     KPI COUNTER ANIMATION
     (Impact in Numbers)
     ======================== */
  function animateKPIs() {
    const kpisSection = document.getElementById("kpis");
    const counters = document.querySelectorAll(".kpi-number[data-target]");

    // Si no existe la sección o no hay counters, no hacemos nada
    if (!kpisSection || !counters.length) return;

    let alreadyRun = false;
    const duration = 1600; // ms

    function startCounting() {
      if (alreadyRun) return;
      alreadyRun = true;

      counters.forEach((counter) => {
        const target = parseFloat(counter.dataset.target);
        const type = counter.dataset.type;
        const originalText = counter.textContent.trim();
        const startTime = performance.now();

        function formatValue(value) {
          switch (type) {
            case "percent":
              return value + "%";
            case "times":
              return value + "x";
            case "hours-text":
              return value + " Hours";
            case "text":
              return value; // durante la animación muestra solo el número
            default:
              return value;
          }
        }

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(target * progress);

          counter.textContent = formatValue(current);

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            // Al final, restauramos el texto original (por si lleva sufijos especiales)
            counter.textContent = originalText;
          }
        }

        requestAnimationFrame(update);
      });
    }

    // Disparamos el conteo cuando la sección entra en viewport
    const kpiObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            kpiObserver.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    kpiObserver.observe(kpisSection);
  }

  // Lanzamos los KPIs
  animateKPIs();

  /* =========================
     SCROLL REVEAL – .reveal
     (uso global en Home, About, etc.)
     ========================= */
  const revealEls = document.querySelectorAll(".reveal");

  if (revealEls.length) {
    // Aplicar delay desde data-reveal-delay (si existe)
    revealEls.forEach((el) => {
      const delay = el.dataset.revealDelay;
      if (delay) {
        el.style.transitionDelay = delay;
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target); // solo una vez por elemento
          }
        });
      },
      { threshold: 0.18 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* =========================
     PARALLAX – FOTO ABOUT (.about-intro-photo.parallax)
     ========================= */
  const parallaxEl = document.querySelector(".about-intro-photo.parallax");

  if (parallaxEl) {
    window.addEventListener("scroll", () => {
      const rect = parallaxEl.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const distance = rect.top + rect.height / 2 - center;
      const maxShift = 12; // px máx. de desplazamiento
      const shift = Math.max(Math.min(distance * -0.06, maxShift), -maxShift);

      parallaxEl.style.transform = `translateY(${shift}px)`;
    });
  }
});

