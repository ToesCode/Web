# ToesCode — Web (migración a Next.js)

Documentación de la migración desde HTML/CSS/JS plano a Next.js + TypeScript + Tailwind CSS, para el módulo compartido del equipo.

## Por qué este stack

**Next.js**
Genera código ultraligero que carga en milisegundos en celular — crítico porque la mayoría de los clientes potenciales (restaurantes, PYMEs) llegan desde el teléfono. Además ofrece mejor SEO que WordPress/Wix. A nivel técnico, resuelve algo que la versión plana no tenía: reutilizar el nav y el footer sin copiar y pegar el mismo HTML en cada página.

**TypeScript**
Con 4 personas tocando el mismo código, el tipado evita errores silenciosos (ej. pasarle a un componente un dato con la forma equivocada). El error aparece en el editor antes de llegar a producción, no después.

**Tailwind CSS**
Permite construir interfaces responsive rápido y mantener un estándar visual consistente, porque todos usan la misma escala de espaciados/colores en vez de inventar valores sueltos en CSS.

## Arquitectura del proyecto

```
/app
  layout.tsx        → shell global: fuentes, metadata, Navbar + Footer
  page.tsx           → home, compone las secciones en orden
  globals.css         → directivas Tailwind + estilos base (selection, focus, reduced-motion)

/components
  /layout             → Navbar.tsx, Footer.tsx
  /sections            → una sección = un archivo (Hero, Servicios, Proyectos, Proceso, Nosotros, Equipo, Contacto)
  /ui                  → piezas reutilizables entre secciones (Reveal, SectionHead)

/lib
  data.ts             → todo el contenido (textos, servicios, proyectos, equipo) separado del JSX

/types
  index.ts            → interfaces TS que describen ese contenido (Servicio, Proyecto, MiembroEquipo, etc.)

/hooks
  useReveal.ts         → reemplaza el IntersectionObserver global de code.js por un hook reusable
```

## Por qué esta estructura permite trabajar en paralelo

- **Cada sección vive en su propio archivo** dentro de `/components/sections`. Si alguien edita "Equipo" y otro "Servicios" al mismo tiempo, son archivos distintos → sin conflictos de git.
- **El contenido está separado del componente** (`/lib/data.ts`). Se puede cambiar un texto o agregar un proyecto sin tocar el JSX/diseño.
- **Los tipos centralizan la forma de los datos** (`/types`). Si alguien agrega un campo nuevo a un proyecto o servicio, TypeScript avisa en todos los lugares que necesitan actualizarse.
- **La navegación (`Navbar`) y el reveal-on-scroll (`useReveal`) ya no dependen de un script global** (`code.js`) que corre sobre todo el documento — cada uno es un componente o hook independiente, así una sección se puede modificar sin arriesgar romper el comportamiento de otra.

## Sobre el CSS

El diseño v3 (paleta cálida, ya aprobada por el equipo) se migró en dos niveles:

1. **Tokens de color/tipografía** → viven en `tailwind.config.ts`, tomados 1:1 de las variables que ya existían en `toes.css` (`--bg`, `--accent`, `--warm`, etc.), para que el look no cambie.
2. **Componentes** → ya usan clases utilitarias de Tailwind directamente (no se copió `toes.css` completo), así que la maquetación queda dentro de cada componente en vez de en un archivo CSS separado de +300 líneas.

Esto es intencional: mezclar "reestructurar en componentes" + "reescribir todo el CSS a mano" en un mismo paso es más riesgoso de lo necesario. Con los tokens ya en Tailwind, cualquier ajuste visual fino (spacing, sombras) se puede iterar sección por sección sin bloquear a nadie.

## Cómo correrlo

```bash
pnpm install
pnpm run dev
```

## Pendiente / próximos pasos sugeridos

- Reemplazar los `equipo` de `/lib/data.ts` con los nombres reales del equipo.
- Revisar fidelidad pixel-a-pixel contra el diseño v3 original (algunos valores de spacing se aproximaron al pasar de `px` fijos a la escala de Tailwind).
- Definir dónde vivirán las imágenes reales de proyectos (`/public/images`) cuando existan, en vez de los placeholders de gradiente.
