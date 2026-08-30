import { sitio, contacto } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-11">
      <div className="max-w-wrap mx-auto px-7">
        <div className="flex flex-wrap items-start justify-between gap-5 mb-7">
          <div>
            <div className="font-display font-bold text-[15px] mb-1.5">{sitio.nombre}</div>
            <div className="text-muted text-sm">{sitio.tagline}</div>
          </div>
          <nav aria-label="Enlaces del footer" className="flex gap-5 text-sm text-muted">
            <a href="#" className="hover:text-accent">GitHub</a>
            <a href="#" className="hover:text-accent">LinkedIn</a>
            <a href={`mailto:${contacto.email}`} className="hover:text-accent">Email</a>
          </nav>
        </div>
        <div className="text-muted text-[13px] border-t border-line pt-5">
          © 2026 {sitio.nombre}
        </div>
      </div>
    </footer>
  );
}
