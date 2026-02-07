# Tikno - Sistema de Adquisición de Clientes (Lead Gen)

**Versión:** 1.0.0
**Estado:** Production Ready
**URL Desarrollo:** http://localhost:3000

Tikno es una plataforma web optimizada para SEO local y conversión, diseñada para una empresa de producción gráfica en Bucaramanga. No es un sitio informativo tradicional; es un embudo de ventas que captura intención de búsqueda transaccional y la dirige a WhatsApp.

## 🚀 Stack Tecnológico

*   **Core:** Next.js 15+ (App Router, Server Components)
*   **Lenguaje:** TypeScript (Strict Mode)
*   **Estilos:** Tailwind CSS v4 (Zero-runtime)
*   **Animaciones:** Framer Motion (Interacciones ricas)
*   **Imágenes:** Next/Image + Sharp (Optimización automática WebP/AVIF)
*   **Tests:** Vitest + React Testing Library
*   **Package Manager:** Bun

## 🛠️ Guía de Desarrollo

### Prerrequisitos
*   [Bun](https://bun.sh/) instalado (v1.0 o superior).
*   Node.js v18+ (opcional, Bun maneja el runtime).

### Comandos Principales

| Comando | Descripción |
|---------|-------------|
| `bun install` | Instala todas las dependencias. |
| `bun dev` | Inicia servidor de desarrollo en puerto 3000. |
| `bun run build` | Compila la aplicación para producción. |
| `bun start` | Inicia el servidor de producción (requiere build previo). |
| `bun test` | Ejecuta la suite de pruebas unitarias. |
| `bun lint` | Verifica calidad de código con ESLint. |

## 📂 Estructura del Proyecto

```
/
├── app/                  # Next.js App Router (Rutas y Páginas)
│   ├── (silos)/          # Carpetas temáticas (empaques, avisos)
│   ├── proyectos/        # Galería dinámica
│   ├── layout.tsx        # Layout global
│   └── page.tsx          # Home Page
├── components/           # UI Kit Reutilizable
│   ├── common/           # Hero, Breadcrumbs, WhatsApp
│   ├── home/             # Secciones específicas del Home
│   ├── layout/           # Header, Footer
│   ├── projects/         # Componentes de galería
│   └── ui/               # Átomos (Button, Card, Section)
├── constants/            # Configuración estática (Teléfonos, RRSS)
├── data/                 # "Base de datos" estática (Productos, Proyectos)
├── types/                # Interfaces TypeScript
└── utils/                # Helpers (Formato moneda, SEO, WhatsApp)
```

## 🎯 Estrategia SEO Implementada

La arquitectura del sitio sigue el modelo de **Silos Temáticos** para maximizar la autoridad tópica.

1.  **Silo Empaques:** `/empaques` -> `/cajas-hamburguesas`, `/bolsas-papel`
    *   *Keywords:* Empaques personalizados, Cajas hamburguesa Bucaramanga.
2.  **Silo Avisos:** `/avisos` -> `/avisos-luminosos`, `/neon-flex`
    *   *Keywords:* Avisos luminosos, Letreros neón.
3.  **Proyectos:** Cada proyecto es una página indexable con esquema `CreativeWork`.

**Técnicas Aplicadas:**
*   **Schema Markup:** JSON-LD para `LocalBusiness`, `Product` y `CreativeWork`.
*   **Metadata API:** Títulos y descripciones únicos por URL.
*   **Sitemap Dinámico:** Generado automáticamente en `app/sitemap.ts`.
*   **Canonical URLs:** Para evitar contenido duplicado.
*   **Performance:** Imágenes LCP optimizadas, fuentes locales.

## 📝 Gestión de Contenido (CMS Manual)

El sitio utiliza archivos estáticos en `data/` para facilitar la edición sin base de datos compleja.

### Agregar un Nuevo Proyecto
1.  Abre `data/projects.ts`.
2.  Agrega un nuevo objeto al array `projects` siguiendo la interfaz `ProjectData`.
3.  Asegúrate de incluir una imagen de alta calidad.
4.  ¡Listo! La página se generará automáticamente en `/proyectos/[slug]`.

### Cambiar Precios
1.  Abre `data/products.ts`.
2.  Busca el producto por su ID.
3.  Edita los valores `min` y `max` en `priceRange`.
4.  Los cambios se reflejan en todas las cards y páginas.

### Actualizar Teléfono WhatsApp
1.  Abre `constants/info.ts`.
2.  Modifica `whatsapp` (número limpio) y `displayPhone` (formateado).
3.  Todos los botones de contacto se actualizarán globalmente.

## 🚢 Despliegue en Vercel

1.  Push a repositorio Git (GitHub/GitLab).
2.  Importar proyecto en Vercel.
3.  Configurar Variables de Entorno:
    *   `NEXT_PUBLIC_SITE_URL`: https://tikno.pro
    *   `NEXT_PUBLIC_WHATSAPP_NUMBER`: 573000000000
4.  Build Command: `bun run build`.
5.  Install Command: `bun install`.

---
© 2026 Tikno. Desarrollado con ❤️ en Bucaramanga.
