# TIKNO - Contexto del Proyecto y Documentación Técnica

> **Versión:** 1.0.0
> **Fecha:** Febrero 2026
> **Estado:** En Desarrollo
> **Ubicación:** Bucaramanga, Colombia

## 1. Visión del Proyecto
Impulso no es un sitio web informativo corporativo; es un **sistema de adquisición de clientes (Lead Gen)**.
El objetivo único es capturar tráfico de búsquedas locales en Google con alta intención de compra ("cajas para hamburguesas bucaramanga", "avisos neón") y convertirlo en conversaciones de WhatsApp.

**Propuesta de Valor:** "Diseñamos, imprimimos y fabricamos todo lo visual de tu negocio en Bucaramanga. Precios claros, sin vueltas."

## 2. Buyer Persona
**Perfil:** "El Emprendedor Práctico" (Dueños de restaurantes, bares, tiendas, droguerías).
*   **Dolores:** Odian esperar cotizaciones formales de 3 días. Desconfían de proveedores que no muestran precios ("inbox"). Necesitan ver para creer.
*   **Comportamiento:** Decide visualmente. Si ve una foto de una caja de hamburguesa que le gusta y el precio le cuadra, escribe para comprar.
*   **Necesidad:** "Quiero verme profesional rápido y barato".

## 3. Identidad Visual y Diseño (Frontend Design)
**Estilo:** Moderno, Minimal, Industrial Suave.
*   Evitar estética genérica de plantilla.
*   Uso de mucho aire (espacio negativo).
*   Fotografía real y grande (no stock photos genéricas de oficinas).
*   Tipografía fuerte y legible.

### Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| **Amarillo Principal** | `#F7D333` | CTAs primarios, banners de oferta, acentos de marca. |
| **Gris Carbono** | `#2B2B2B` | Textos principales, fondos oscuros (secciones de contraste). |
| **Blanco Puro** | `#FFFFFF` | Fondos generales, limpieza. |
| **Gris Claro** | `#E0E0E0` | Bordes sutiles, fondos de cards, separadores. |
| **Azul Acción** | `#1877F2` | Botones de WhatsApp (hover), enlaces de texto. |

### Componentes Clave Sugeridos
*   **Cards de Producto:** Imagen grande a sangre, título claro, precio "Desde $XXX" visible (Dato propietario clave para SEO y confianza).
*   **Galerías Masonry:** Para mostrar portafolio de clientes reales en Bucaramanga (Prueba social).
*   **Floating WhatsApp:** Botón persistente con mensaje de saludo contextual según la página.

## 4. Arquitectura de Información y Estrategia SEO (Programmatic/Local)
La arquitectura sigue el modelo **Hub & Spoke** (Producto Padre -> Intenciones Específicas).
La estrategia es competir por **Long Tail Local** + **Producto Específico**.

### Mapa del Sitio y Keywords

#### A. Nivel Autoridad (Home)
*   **URL:** `/`
*   **Objetivo:** Confianza y distribución de tráfico.
*   **H1/Hero:** "Diseñamos, imprimimos y fabricamos todo lo visual de tu negocio en Bucaramanga".
*   **Conversión:** CTA WhatsApp Global.

#### B. Cluster Empaques (Comida Rápida)
*   **Parent URL:** `/empaques`
    *   *Keyword:* Empaques personalizados comida rápida.
*   **Sub-página 1:** `/empaques/cajas-hamburguesas-bucaramanga`
    *   *Intención:* Restaurante buscando proveedor local.
    *   *Contenido:* Fotos de cajas armadas, tabla de medidas estándar, precios por millar.
*   **Sub-página 2:** `/empaques/bolsas-papel-logo`
    *   *Intención:* Tiendas de ropa o regalos.

#### C. Cluster Avisos (Visibilidad)
*   **Parent URL:** `/avisos`
*   **Sub-página 1:** `/avisos/avisos-luminosos-bucaramanga`
    *   *Keyword:* Avisos luminosos Bucaramanga.
*   **Sub-página 2:** `/avisos/avisos-acrilico-precios`
    *   *Diferencial:* Mostrar rangos de precios (Gatillo mental de transparencia).
*   **Sub-página 3:** `/avisos/neon-flex`
    *   *Keyword:* Letreros neón flex personalizados.
    *   *Visual:* Fotos oscuras con el neón encendido.

#### D. Cluster Papelería (Corporativo)
*   **Parent URL:** `/papeleria-comercial`
    *   *Keyword:* Papelería comercial Bucaramanga.
    *   *Productos:* Tarjetas de presentación, volantes, factureros, carpetas.

#### E. Producto Estrella (Bundle)
*   **URL:** `/kits-emprendedor-publicidad`
    *   *Concepto:* "Todo lo que necesitas para abrir".
    *   *Incluye:* Aviso + Stickers + Bolsas + Diseño básico.
    *   *Estrategia:* Ticket alto, solución completa.

#### F. Servicios Complementarios
*   **Impresión:** `/impresion` -> Sub: `/impresion/stickers-bucaramanga` (Alta rotación).
*   **Diseño (TOFU):** `/diseno-empaques` -> Keyword: "Diseño gráfico para empaques". Entrada de tráfico temprano.
*   **Litografía:** `/litografia-bucaramanga` -> Página de autoridad local para búsquedas industriales.

## 5. Especificaciones Técnicas (Stack & Standards)

### Core Stack
*   **Framework:** Next.js (App Router).
*   **Lenguaje:** TypeScript (Strict mode).
*   **Estilos:** Tailwind CSS v4 (Configuración CSS-first, variables nativas).
*   **Package Manager:** Bun.

### Performance & UX
*   **Imágenes:** Uso estricto de `next/image` con formatos WebP/AVIF. LCP (Largest Contentful Paint) optimizado en el Hero.
*   **Animaciones:** Framer Motion para micro-interacciones y transiciones de entrada (fade-in suave al hacer scroll). *Regla: No animar por animar, solo para guiar el ojo.*
*   **Fuentes:** `next/font` (Google Fonts) para evitar CLS (Cumulative Layout Shift).

### SEO Técnico
*   **Metadata API:** Cada página (`page.tsx`) debe exportar su objeto `metadata` con `title`, `description` y `openGraph` personalizados.
*   **Schema Markup:** Implementar JSON-LD para `LocalBusiness` y `Product` en las páginas de detalle.
*   **RSC (React Server Components):** Todo el contenido estático debe renderizarse en el servidor. Solo los componentes interactivos (galerías, botones de wa) usan "use client".

## 6. Reglas de UX/UI Obligatorias
1.  **Mobile First:** El 80% del tráfico será móvil. Los botones deben tener tamaño de dedo (min 44px height).
2.  **WhatsApp Flotante:** Siempre visible en `z-index` alto. Debe permitir ir directo al chat sin guardar número.
3.  **Precios Visibles:** "Desde $..." o "Rangos de $... a $...". *Nunca* obligar a cotizar para tener una idea de precio.
4.  **Heros Únicos:** Cada página interna debe tener un Hero Header distinto, relevante a su contenido (foto de neón en neón, foto de caja en cajas).
5.  **Interlinking:** Las páginas de productos deben enlazar a productos complementarios (Ej: Cajas -> Stickers).

## 7. Estrategia de Conversión
*   **Funnel:** Búsqueda Google -> Landing de Producto Específico -> Ver Fotos/Precio -> Clic en WhatsApp -> Cierre Manual.
*   **Mensajes Pre-definidos:** El link de WhatsApp debe llevar un mensaje pre-cargado: *"Hola Impulso, vi las cajas para hamburguesa en la web y quiero cotizar..."*

---
*Este documento debe ser consultado antes de crear cualquier nueva página o componente para asegurar consistencia con la visión de la marca.*
