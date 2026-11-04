# AM Soluciones Tecnológicas · Sitio web corporativo (React + Vite)

Sitio web empresarial responsive para captar clientes en Medellín y su área metropolitana.
Incluye además el **panel interno** (cotizador, planes y ruta de 90 días) en `/#/panel`.

## Uso
Requiere Node.js 18 o superior.
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ para publicar
npm run preview  # prueba la versión compilada
```
- Sitio público: `http://localhost:5173/`
- Panel interno: `http://localhost:5173/#/panel`

## 1. Completa tus datos (lo más importante)
Edita **`src/config.js`**:
- `whatsapp`: código de país + número, sin "+" ni espacios. Ej.: `"573001234567"`.
  Con esto funcionan el botón flotante, los botones "Cotizar por WhatsApp" y el formulario.
- `email`, `telefono`, `direccion`: aparecen en Contacto y pie de página.
- `redes`: enlaces de Facebook, Instagram, LinkedIn, TikTok y YouTube. Solo se muestran los que completes.
- `formEndpoint` (opcional): URL de un servicio de formularios como Formspree para recibir cada solicitud en tu correo.

**Cómo envía el formulario** (en este orden): `formEndpoint` → WhatsApp → correo (`mailto`) → si no hay nada configurado, muestra el mensaje para copiar.
Un formulario sin servidor no puede enviar correos por sí solo; por eso conviene configurar WhatsApp o `formEndpoint`.

## 2. Textos, servicios, proyectos y precios
Todo está en **`src/site/content.js`** (servicios, proyectos, razones para elegirnos y planes con precios).
Los textos de Inicio, Nosotros y Contacto están en `src/site/Sections.jsx` y `src/site/Contacto.jsx`.

## 3. Imágenes
El sitio usa íconos e ilustraciones en CSS para cargar rápido y no usar imágenes sin licencia.
Para agregar fotos reales (centros de datos, cámaras, redes, IoT): guárdalas en `public/img/` y úsalas en las tarjetas del portafolio (`.s-pimg` en `Sections.jsx`) con una etiqueta `<img>`. Usa fotos propias o con licencia, y formato `.webp` o `.jpg` optimizado.

## 4. SEO
- `index.html` ya incluye título, descripción, palabras clave, datos de ubicación (Medellín) y datos estructurados (JSON-LD) sin inventar teléfono ni dirección.
- Cuando tengas dominio: agrega `<link rel="canonical" href="https://tudominio.com/">`, un `sitemap.xml` en `public/` y reemplaza `og:image` por una URL absoluta.
- Crea tu perfil de Google Business Profile en Medellín: es lo que más ayuda a aparecer en búsquedas locales.

## 5. Publicar
Sube el contenido de `dist/` a Netlify, Vercel, Cloudflare Pages o Firebase Hosting.

## Estructura
```
src/
  config.js            Datos de contacto y redes (EDITAR)
  App.jsx              Sitio en "/" y panel en "/#/panel"
  site/                Sitio web público
    content.js         Servicios, proyectos, planes
    Sections.jsx       Inicio, Nosotros, Servicios, Portafolio, ¿Por qué elegirnos?, Planes
    Contacto.jsx       Formulario y datos de contacto
    Site.jsx           Menú, pie de página y botón de WhatsApp
    site.css           Estilos (azul oscuro, azul eléctrico, blanco y gris)
  panel/               Panel interno de operaciones
  assets/logo.png      Logo
```
