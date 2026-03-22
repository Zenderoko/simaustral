# SIMAUSTRAL - Historial del Proyecto

## Información General
- **Proyecto:** SIMAUSTRAL - Sitio web de servicios de seguridad y equipos contra incendios
- **Ubicación:** `C:\Users\Alex Zender\Desktop\SIMAUSTRAL\simaustralastro`
- **Framework:** Astro v6.0.8
- **Gestor de paquetes:** pnpm

## Configuraciones Realizadas

### 1. Formulario de Contacto con EmailJS
- **Paquete instalado:** `@emailjs/browser@4.4.1`
- **Credenciales:**
  - Service ID: `service_92qu6pg`
  - Template ID: `template_b69ro4b` (actualizado a `template_y7u7i8d` según último código)
  - Public Key: `KWaoGTpLK6LIExO8T`
- **Archivo:** `src/pages/contacto.astro`
- **Importaciones en script del cliente** (no en frontmatter)

### 2. Sistema de Notificaciones Toast
- **Paquete instalado:** `toastify-js@1.12.0`
- **Tipos TypeScript:** `@types/toastify-js@1.12.4`
- **Archivo de declaraciones:** `src/toastify-js.d.ts`
- Toast verde para éxito, rojo para error
- Duración: 4000ms, posición: top-right

### 3. Mapa de Google Maps
- **Coordenadas:** -42.37478995189707, -73.64354166569402
- **Dirección:** El Estero Nro 60, Dalcahue, Chiloé
- **URL embebida:** `https://www.google.com/maps?q=-42.37478995189707,-73.64354166569402&t=m&z=17&output=embed&iwloc=near`
- **Funcionalidades:**
  - Mapa embebido interactivo
  - Botón para abrir en Google Maps externo
  - Link en tarjeta de dirección para abrir en Maps

### 4. Despliegue en Netlify
- **Archivo de configuración:** `netlify.toml`
- **Git inicializado** con commit inicial
- **Comandos para subir a GitHub:**
  ```bash
  git remote add origin https://github.com/tu-usuario/simaustral.git
  git branch -M main
  git push -u origin main
  ```
- **Despliegue automático** conectando repo de GitHub en Netlify

## Estructura de Archivos Clave
- `src/pages/contacto.astro` - Formulario con bento grid
- `src/pages/galeria.astro` - Galería con bento grid, animaciones Lottie y lightbox
- `src/layouts/Layout.astro` - Layout principal
- `src/toastify-js.d.ts` - Declaración de tipos para Toastify
- `netlify.toml` - Configuración de despliegue

## Página de Galería (`src/pages/galeria.astro`)
- Diseño bento grid con estilo profesional (3 columnas)
- 4 imágenes de servicios: Balsas.jpeg, entrada.jpeg, balsas2.jpeg, Mantencion balsa.jpeg
- Animación LottieFiles (shield con check) en el header
- Animaciones de entrada con IntersectionObserver
- Contadores animados para estadísticas
- Lightbox para ampliar imágenes
- Reseña de servicios en tarjeta introductoria
- Navegación y footer actualizados con enlace a Galería

## Variables de Entorno / Secrets
- EmailJS es frontend-only, no requiere variables de entorno

## Próximos Pasos (pendientes)
- Subir proyecto a GitHub y conectar con Netlify
- Posiblemente migrar a hosting propio en el futuro

## Notas Técnicas
- Las importaciones de librerías client-side (EmailJS, Toastify) deben estar dentro de `<script>` en Astro, no en el frontmatter `---`
- El formulario usa nombres de campo: `from_name`, `from_email`, `from_phone`, `message`
- La plantilla de EmailJS debe usar las mismas variables en `{{ }}`
