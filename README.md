# Savora

## Descripción general

Savora es una aplicación web para la gestión de rescate de alimentos con enfoque en restaurantes y consumidores. Su objetivo es ayudar a reducir el desperdicio alimentario mediante precios dinámicos, reservas y ofertas especiales para comida que de otro modo podría perderse.

Este proyecto combina un frontend moderno con renderizado en servidor (SSR) y una arquitectura basada en rutas, permitiendo una experiencia rápida y escalable tanto para clientes como para negocios.

## Arquitectura

Savora se estructura como una aplicación React con las siguientes capas principales:

- `src/routes/`: Define las rutas y páginas de la aplicación usando `@tanstack/react-router`.
- `src/components/`: Contiene componentes UI reutilizables y específicos del producto.
- `src/lib/`: Incluye utilidades y manejo de errores para SSR y experiencia de usuario.
- `src/server.ts`: Punto de entrada server-side para la aplicación, con manejo de errores SSR personalizado.
- `src/styles.css`: Estilos globales aplicados con Tailwind CSS.

El proyecto usa Vite para el desarrollo local y Nitro/Vercel para despliegue en producción. La configuración de Vite está extendida con `@lovable.dev/vite-tanstack-config`, lo que facilita la integración de React, Tailwind y Nitro sin duplicar plugins.

### Flujo clave

1. El usuario accede a una ruta manejada por `@tanstack/react-router`.
2. La aplicación carga componentes desde `src/routes/` y renderiza contenido.
3. `@tanstack/react-query` administra las solicitudes de datos y el estado de caché.
4. `src/server.ts` maneja peticiones SSR y utiliza `src/lib/error-capture.ts` para capturar y mostrar errores de forma amigable.

## Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- `@tanstack/react-router`
- `@tanstack/react-query`
- Radix UI (`@radix-ui/*`) para componentes accesibles y estilizados
- `lucide-react` para iconos
- `react-hook-form` para formularios
- `zod` para validación
- `recharts` para visualizaciones de datos
- `embla-carousel-react` para carousels
- `sonner` para notificaciones
- `nitro` + `vercel` para despliegue serverless

## Estructura del proyecto

- `bunfig.toml` — Configuración de Bun/Vite native (si aplica).
- `vite.config.ts` — Configuración principal de Vite y adaptaciones para Nitro/Vercel.
- `package.json` — Dependencias y scripts de desarrollo.
- `src/server.ts` — Entrada del servidor con SSR y manejo de errores.
- `src/routes/` — Rutas de la aplicación, incluyendo `__root.tsx` y páginas como `index.tsx`, `orders.tsx`, `profile.tsx`, etc.
- `src/components/` — Componentes UI reutilizables y específicos de Savora.
- `src/lib/` — Utilidades, reportes de errores y configuración.
- `public/` — Recursos públicos como `robots.txt` e imágenes.

## Imágenes referenciales

(public/images/image.png)

(public/images/image1.png)

## Instrucciones de ejecución

### Requisitos

- Node.js 20+ o compatible
- npm o pnpm

### Instalación

```bash
cd Savora
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre el navegador en la URL mostrada, normalmente `http://localhost:5173`.

### Previsualización de producción

```bash
npm run build
npm run preview
```

### Lint y formato

```bash
npm run lint
npm run format
```

## Despliegue

Savora está preparada para desplegarse en Vercel gracias a la configuración de Nitro en `vite.config.ts`. El build genera la salida en `.vercel/output`.

### Comando típico de despliegue

```bash
npm run build
```

Luego publica el contenido con tu flujo habitual de Vercel.

## Participantes del hackathon

- Luz Melisa Quisberth Chavez
- Diana Noemí Rojas Mamani
- Juan Pablo Vidal Yavi
- Luis Eduardo Vargas Pantoja
- Daniela Ventura Rivera

---

Savora — Rescate de Alimentos IA: una solución para reducir el desperdicio alimentario y potenciar la restauración con tecnología moderna.
