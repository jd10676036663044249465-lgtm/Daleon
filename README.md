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
