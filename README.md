README — Daleon Group Website
Este repositorio contiene el código fuente de la nueva página web de Daleon Group, desarrollada en colaboración entre Edward (Tú) y Nicolás, utilizando un flujo de trabajo profesional basado en Git, GitHub, ramas protegidas, y ramas de features.

🚀 Objetivo del Proyecto
Construir una página web moderna, profesional y estable para Daleon Group, utilizando un desarrollo colaborativo, organizado y seguro.

🧠 Estructura de Ramas
Usamos un modelo simple y profesional basado en tres tipos de ramas.

🔵 1. main (rama estable / producción)
Contiene el código 100% estable.
Nada se edita directamente aquí.
Solo se actualiza mediante pull requests desde dev.
Está protegida en GitHub.

🟠 2. dev (rama de integración / pruebas)
Copia de main, pero donde se juntan los cambios nuevos.
Se prueban nuevas features antes de mandarlas a main.
También está protegida en GitHub.

🟣 3. feature/... (ramas de trabajo individual)
Cada tarea nueva se hace en su propia rama.
Ejemplos:
feature/home-hero
feature/navbar
feature/footer
feature/services-section
feature/responsive-fixes

🔄 Flujo de Trabajo Oficial
Este es el proceso exacto que deben seguir tú y Nicolás.
⭐ Antes de empezar una tarea

Cambiar a dev:
git checkout dev
git pull origin dev

Crear una rama nueva:
git checkout -b feature/nombre-de-la-tarea

Mientras trabajas
Realiza cambios en tu propia rama feature.
Haz commits pequeños y frecuentes:
git add .
git commit -m "Descripción del cambio"

Sube la rama al repositorio:
git push origin feature/nombre-de-la-tarea

⭐ Cuando terminas la tarea

Abre un Pull Request en GitHub:

Base: dev

Compare: feature/...

El otro miembro revisa (o tú mismo si es simple).

Si todo está bien → merge a dev.

Borra la rama feature (opcional pero recomendado).

⭐ Actualizar main
Cuando dev está estable, revisada y lista:
Crear un PR desde dev → main.
Revisar, aprobar y hacer merge.
main queda actualizado con la nueva versión estable.

🛡️ Protección de Ramas (GitHub)
Se aplican estas reglas a main y dev:

✔ Require pull request before merging
✔ Require approvals (mínimo 1)
✔ Require status checks to pass before merging
✔ Do not allow bypassing the above settings

Todo lo demás queda desactivado.

📁 Estructura Sugerida del Proyecto
/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── styles/
│   └── utils/
├── public/
├── README.md
├── package.json
└── .gitignore

🧩 Normas Internas
No se sube nada directamente a main o dev.
Cada cambio = nueva rama feature/.
No trabajar en la misma sección sin acordarlo.
Actualizar siempre dev antes de empezar una rama nueva.
Revisar los PR antes de aprobar.

✔️ Comandos útiles
# Cambiar entre ramas
git checkout main
git checkout dev
git checkout -b feature/nueva-tarea

# Actualizar una rama local
git pull origin main
git pull origin dev

# Subir cambios
git add .
git commit -m "Mensaje"
git push origin nombre-de-la-rama

# Mezclar cambios locales con dev
git merge dev

🏁 Conclusión
Este README asegura que el proyecto se mantenga:
ordenado
profesional
seguro
escalable
y sin riesgo de dañar lo que ya funciona

<!--    
    <section class="section section-alt" id="services">
      <img src="img/deco-services.png" class="section-decoration" alt="">
      <div class="container">
        <h2 class="section-title">Why Daleon Group</h2>
        <p class="section-lead">
          Four specialized units. One nearshore partner. Daleon Group combines leadership, efficiency, and human quality
          to build high-performance remote teams.
        </p>

        <div class="feature-grid">
          <div class="feature-item">
            <h3>4 units, 1 direction</h3>
            <p>
              Legal, Marketing, Sales, and BPO under a unified strategy, with central leadership that protects quality
              and consistency.
            </p>
          </div>

          <div class="feature-item">
            <h3>Spanish–English bilingual</h3>
            <p>
              Remote teams that communicate clearly with clients, providers, leads, and stakeholders in both languages.
            </p>
          </div>

          <div class="feature-item">
            <h3>Smarter cost structures</h3>
            <p>
              Access specialized LATAM talent with more efficient cost structures than traditional onshore hiring.
            </p>
          </div>

          <div class="feature-item">
            <h3>Flexible engagement models</h3>
            <p>
              Full-time roles, dedicated teams, project pods, or hybrid models according to your growth stage.
            </p>
          </div>

          <div class="feature-item">
            <h3>Industry-specific training</h3>
            <p>
              Ongoing training by vertical: legal, e-commerce, agencies, SaaS, professional services, and more.
            </p>
          </div>

          <div class="feature-item">
            <h3>U.S.-aligned time zones</h3>
            <p>
              Compatible time zones to collaborate in real time with teams across the U.S. and Canada.
            </p>
          </div>
        </div>
      </div>
    </section> -->

<!--   
 <section class="industries-gallery" id="industries">
  <img src="img/deco-about.png" class="section-decoration" alt="">
  <div class="container">
    <h2 class="section-title">Industries We Serve</h2>
    <p class="section-lead">
      We support law firms, startups, agencies, e-commerce businesses, and service-based companies across diverse industries.
    </p>
  </div>

  <div class="industries-track">

    <div class="industry-card">
      <h3>Law Firms</h3>
      <p>Personal Injury, Employment, Family Law, Criminal, Immigration, and more.</p>
    </div>

    <div class="industry-card">
      <h3>Small Businesses</h3>
      <p>Admin, marketing, back-office and customer support.</p>
    </div>

    <div class="industry-card">
      <h3>E-commerce</h3>
      <p>Customer service, order management, content and ads support.</p>
    </div>

    <div class="industry-card">
      <h3>Agencies & Coaches</h3>
      <p>SDRs, creatives, assistants and content teams.</p>
    </div>

    <div class="industry-card">
      <h3>Startups</h3>
      <p>Growth, operations, marketing and back-office pods.</p>
    </div>

  </div>
</section>

    <section class="section section-alt" id="process">
      <img src="img/deco-services.png" class="section-decoration" alt="">
      <div class="container">
        <h2 class="section-title">How We Work</h2>

        <div class="process-grid">
          <div class="process-step">
            <div class="step-number">1</div>
            <h3>Discovery & Scoping</h3>
            <p>
              We understand your operations, goals, and the roles you need across Legal, Marketing, Sales, or BPO.
            </p>
          </div>

          <div class="process-step">
            <div class="step-number">2</div>
            <h3>Talent Sourcing</h3>
            <p>
              We source and pre-select nearshore talent aligned with your culture, industry, and tools.
            </p>
          </div>

          <div class="process-step">
            <div class="step-number">3</div>
            <h3>Client Interviews</h3>
            <p>
              Final interviews with your team to confirm fit before moving forward with hiring.
            </p>
          </div>

          <div class="process-step">
            <div class="step-number">4</div>
            <h3>Onboarding & Training</h3>
            <p>
              We set up tools, workflows, and playbooks, and support the integration with your internal teams.
            </p>
          </div>

          <div class="process-step">
            <div class="step-number">5</div>
            <h3>Performance & QA</h3>
            <p>
              Monthly follow-up, clear metrics, and ongoing support to ensure long-term quality.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section" id="testimonials">
      <img src="img/deco-services.png" class="section-decoration" alt="">
      <img src="img/deco-case.png" class="section-decoration" alt="">
      <div class="container">
        <h2 class="section-title">What Our Clients Say</h2>

        <div class="cards-grid">
          <article class="testimonial-card">
            <p class="testimonial-text">
              “Daleon helped us structure a complete remote legal team. Today we manage more cases without increasing the
              load on our in-house staff.”
            </p>
            <p class="testimonial-author">
              Managing Partner · Personal Injury Law Firm
            </p>
          </article>

          <article class="testimonial-card">
            <p class="testimonial-text">
              “In less than three months, our nearshore marketing and BDR team from Daleon built a consistent pipeline of
              qualified opportunities.”
            </p>
            <p class="testimonial-author">
              CEO · Marketing Agency
            </p>
          </article>

          <article class="testimonial-card">
            <p class="testimonial-text">
              “Their BPO model allowed us to delegate back office and focus on product and growth. The integration was
              surprisingly smooth.”
            </p>
            <p class="testimonial-author">
              Founder · SaaS Startup
            </p>
          </article>
        </div>
      </div>
    </section>



-->