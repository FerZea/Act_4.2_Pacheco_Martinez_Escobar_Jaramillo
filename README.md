# Act_4_2_Escobar_Jaramillo_Fernando_Pacheco_Martinez_Daniel

Proyecto escolar de front-end realizado con React.

## Descripción

Implementación en React de un diseño creado en Figma para un dashboard de monitoreo de cursos.

## Objetivo del proyecto

Convertir en React una pantalla diseñada en Figma, manteniendo una estructura simple y clara para una actividad escolar de front-end. El proyecto usa componentes reutilizables, datos de ejemplo y estilos CSS sencillos para facilitar su lectura y explicación en clase.

## Tecnologías usadas

- React
- Vite
- JavaScript
- CSS

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación en Linux y macOS

```bash
npm install
```

## Ejecución en Linux y macOS

```bash
npm run dev
```

## Compilación en Linux y macOS

```bash
npm run build
```

## Instalación en Windows

1. Instala Node.js desde `https://nodejs.org/`.
2. Abre `PowerShell` o `Símbolo del sistema` dentro de la carpeta del proyecto.
3. Ejecuta:

```bash
npm install
```

## Ejecución en Windows

```bash
npm run dev
```

## Compilación en Windows

```bash
npm run build
```

## Estructura del proyecto

- `src/components`: componentes base propuestos para el dashboard.
- `src/data`: datos de ejemplo usados en la interfaz.
- `src/pages`: pagina principal usada para integrar la base visual.
- `src/styles`: estilos globales y variables iniciales.

## Componentes

- `DashboardLayout`: contenedor general de la pantalla.
- `PageHeader`: encabezado superior con usuario y boton de salida.
- `GroupSection`: seccion reutilizable para grupos actuales o pasados.
- `GroupCard`: tarjeta base para mostrar cada grupo.

## Props de los componentes importantes

- `PageHeader`: `title`, `userName`, `logoutLabel`
- `GroupSection`: `title`, `groups`, `emptyMessage`
- `GroupCard`: `title`, `group`, `schedule`, `progress`, `progressColor`, `actions`

## Integrantes

- Escobar Jaramillo Fernando
- Pacheco Martinez Daniel
