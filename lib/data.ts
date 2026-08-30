import type {
  NavLink,
  Servicio,
  Proyecto,
  ProcesoPaso,
  MiembroEquipo,
} from "@/types";

export const navLinks: NavLink[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#equipo", label: "Equipo" },
];

export const servicios: Servicio[] = [
  {
    id: "web",
    titulo: "Desarrollo web",
    descripcion:
      "Sitios y aplicaciones web pensados para ser claros, rápidos y fáciles de usar.",
    icon: "web",
  },
  {
    id: "sistemas",
    titulo: "Sistemas a medida",
    descripcion: "Construimos herramientas alrededor de tus procesos y necesidades.",
    icon: "sistemas",
  },
  {
    id: "automatizacion",
    titulo: "Automatización",
    descripcion:
      "Eliminamos tareas repetitivas para que puedas dedicar tiempo a lo importante.",
    icon: "automatizacion",
  },
];

export const proyectos: Proyecto[] = [
  {
    id: "gestion",
    titulo: "Plataforma de gestión",
    descripcion: "Una interfaz para visualizar información y reducir trabajo manual.",
    tags: ["Web", "API REST", "PostgreSQL"],
    visual: "pv-1",
  },
  {
    id: "automatizacion-procesos",
    titulo: "Automatización de procesos",
    descripcion: "Flujos que conectan servicios y ejecutan tareas automáticamente.",
    tags: ["Python", "APIs"],
    visual: "pv-2",
  },
  {
    id: "seguimiento",
    titulo: "App de seguimiento",
    descripcion: "Una app simple para llevar el registro de un proceso día a día.",
    tags: ["Mobile", "Firebase"],
    visual: "pv-3",
  },
];

export const proceso: ProcesoPaso[] = [
  {
    numero: "01",
    titulo: "Nos cuentas",
    descripcion: "Nos explicas qué necesitas, aunque todavía no tengas claro cómo hacerlo.",
  },
  {
    numero: "02",
    titulo: "Lo pensamos",
    descripcion: "Entendemos el problema y buscamos una solución que tenga sentido.",
  },
  {
    numero: "03",
    titulo: "Lo construimos",
    descripcion: "Desarrollamos, probamos y vamos mostrando avances.",
  },
  {
    numero: "04",
    titulo: "Lo entregamos",
    descripcion: "Dejamos la solución funcionando y lista para usar.",
  },
];

export const equipo: MiembroEquipo[] = [
  { iniciales: "P1", nombre: "Persona1", rol: "Desarrollo / Backend" },
  { iniciales: "P2", nombre: "P2", rol: "Diseño / Frontend" },
  { iniciales: "P3", nombre: "P3", rol: "Backend / Infraestructura" },
  { iniciales: "P4", nombre: "P4", rol: "Negocios / Marketing" },
];

export const contacto = {
  email: "hola@toescode.com",
};

export const sitio = {
  nombre: "ToesCode",
  tagline: "Software prime.",
};
