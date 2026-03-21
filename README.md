# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# Guía ACF para SIMAUSTRAL - WordPress

## Plugins necesarios

- **Advanced Custom Fields** (ACF)
- **ACF to REST API** (para exponer campos en el JSON)

---

## Grupos de Campos ACF

### 1. Página Inicio

- **Título:** Página Inicio
- **Ubicación:** Página -slug es igual a- inicio
- **Campos:**
  | Nombre | Tipo | Etiqueta |
  |--------|------|----------|
  | subtitle | Texto | Subtítulo |
  | banner_titulo | Texto | Título del banner |
  | banner_subtitulo | Texto | Subtítulo del banner |
  | servicios_home | Repeater | Servicios en Inicio |
  | └─ servicio_icono | Imagen | Icono del servicio |
  | └─ servicio_titulo | Texto | Título |
  | └─ servicio_descripcion | Texto | Descripción breve |

### 2. Página Nosotros

- **Título:** Página Nosotros
- **Ubicación:** Página -slug es igual a- nosotros
- **Campos:**
  | Nombre | Tipo | Etiqueta |
  |--------|------|----------|
  | subtitle | Texto | Subtítulo |
  | historia_titulo | Texto | Título Historia |
  | historia_contenido | Editor wysiwyg | Contenido Historia |
  | mision_titulo | Texto | Título Misión |
  | mision_contenido | Editor wysiwyg | Contenido Misión |
  | vision_titulo | Texto | Título Visión |
  | vision_contenido | Editor wysiwyg | Contenido Visión |
  | valores | Repeater | Valores |
  | └─ valor_nombre | Texto | Nombre del valor |
  | └─ valor_descripcion | Texto | Descripción |

### 3. Página Servicios

- **Título:** Página Servicios
- **Ubicación:** Página -slug es igual a- servicios
- **Campos:**
  | Nombre | Tipo | Etiqueta |
  |--------|------|----------|
  | subtitle | Texto | Subtítulo |
  | intro_texto | Editor wysiwyg | Texto introductorio |

### 4. Página Galería

- **Título:** Página Galería
- **Ubicación:** Página -slug es igual a- galeria
- **Campos:**
  | Nombre | Tipo | Etiqueta |
  |--------|------|----------|
  | subtitle | Texto | Subtítulo |
  | galeria | Galería | Imágenes de galería |

### 5. Página Contacto

- **Título:** Página Contacto
- **Ubicación:** Página -slug es igual a- contacto
- **Campos:**
  | Nombre | Tipo | Etiqueta |
  |--------|------|----------|
  | subtitle | Texto | Subtítulo |
  | direccion | Texto | Dirección |
  | telefono | Texto | Teléfono |
  | email | Texto | Email |
  | horario | Texto | Horario |
  | latitud | Número | Latitud mapa |
  | longitud | Número | Longitud mapa |
  | zoom_mapa | Número | Zoom del mapa (default: 14) |

### 6. CPT Servicios

- **Título:** Servicios CPT
- **Ubicación:** Tipo de post -es igual a- servicios
- **Campos:**
  | Nombre | Tipo | Etiqueta |
  |--------|------|----------|
  | descripcion | Editor wysiwyg | Descripción del servicio |
  | caracteristicas | Repeater | Características |
  | └─ caracteristica | Texto | Característica |
  | imagen_destacada | Imagen | Imagen principal |
  | icono | Imagen | Icono representativo |

### 7. CPT Novedades

- **Título:** Novedades CPT
- **Ubicación:** Tipo de post -es igual a- noticias
- **Campos:**
  | Nombre | Tipo | Etiqueta |
  |--------|------|----------|
  | extracto | Texto | Resumen de la noticia |
  | imagen_portada | Imagen | Imagen destacada |
  | mostrar_en_home | True/False | Mostrar en inicio |

---

## Páginas a crear en WordPress

### Slugs obligatorios:

1. **inicio** - Título: Inicio
2. **nosotros** - Título: Nosotros
3. **servicios** - Título: Servicios
4. **galeria** - Título: Galería
5. **contacto** - Título: Contacto
6. **noticias** - Título: Novedades

### CPT Servicios (crear 3 posts):

**1. Inspección de Balsas Salvavidas**

- Descripción: "Realizamos inspecciones anuales y mantenimiento de balsas salvavidas según normativa SOLAS y DGPSN. Contamos con técnicos certificados y equipamiento de última generación."
- Características:
  - Inspección periódica anual
  - Recarga de botellines de gas
  - Reemplazo de equipos vencidos
  - Certificación y documentación

**2. Venta de Señales de Salvataje**

- Descripción: "Comercializamos señales de salvataje homologadas: señales de mano, paracaídas y señales de humo. Todos nuestros productos cumplen con las normativas internacionales."
- Características:
  - Señales de mano
  - Señales paracaídas
  - Señales de humo
  - Productos homologados

**3. Inspección de Equipos de Seguridad a Bordo**

- Descripción: "Servicio integral de inspección de equipos de seguridad naval incluyendo trajes de inmersión y equipos ERA. Cumplimos con todas las normas SOLAS y MARPOL."
- Características:
  - Inspección de trajes de inmersión
  - Verificación de equipos ERA
  - Pruebas de presión
  - Certificación de homologación

### CPT Noticias/Novedades (crear ejemplos):

**Categorías:**

- Novedades Técnicas
- Noticias Isla Chiloé

**Ejemplo 1:**

- Título: "SIMAUSTRAL obtiene certificación internacional"
- Categoría: Novedades Técnicas
- Extracto: "Nuestra empresa recibió la certificación de calidad ISO 9001 para servicios de inspección náutica."

**Ejemplo 2:**

- Título: "Nuevo taller de inspección en Chiloé"
- Categoría: Noticias Isla Chiloé
- Extracto: "Inauguramos nuevas instalaciones en la isla de Chiloé para atender mejor a nuestros clientes de la zona."

---

## Notas importantes

1. **Slug de páginas deben ser exactos:** inicio, nosotros, servicios, galeria, contacto

2. **Activar ACF to REST API:** Para que los campos aparezcan en el JSON, el plugin debe estar activo

3. **Verificar API:** Después de crear contenido, visita:
   `http://simaustral.local/wp-json/wp/v2/pages`

   Deberías ver los campos `acf` en la respuesta
