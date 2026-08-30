export interface NavLink {
  href: string;
  label: string;
}

export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  icon: "web" | "sistemas" | "automatizacion";
}

export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  tags: string[];
  visual: "pv-1" | "pv-2" | "pv-3";
}

export interface ProcesoPaso {
  numero: string;
  titulo: string;
  descripcion: string;
}

export interface MiembroEquipo {
  iniciales: string;
  nombre: string;
  rol: string;
}
