import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { proyectos } from "@/lib/data";

const visualGradients: Record<string, string> = {
  "pv-1": "bg-gradient-to-br from-accent-soft to-[#d7e2ff]",
  "pv-2": "bg-gradient-to-br from-warm-soft to-[#f6ddc7]",
  "pv-3": "bg-gradient-to-br from-[#EFEFEC] to-line",
};

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHead
          eyebrow="Proyectos"
          title="Algunas cosas que hemos construido."
          description="Proyectos que nos han ayudado a aprender, experimentar y convertir ideas en software."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
          {proyectos.map((proyecto) => (
            <Reveal
              key={proyecto.id}
              className="rounded-2xl overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div
                className={`h-[150px] rounded-2xl mb-4.5 ${visualGradients[proyecto.visual]}`}
              />
              <h3 className="font-display font-bold text-[16.5px] mb-2">
                {proyecto.titulo}
              </h3>
              <p className="text-muted text-sm mb-3">{proyecto.descripcion}</p>
              <div className="text-[13px] text-muted">
                {proyecto.tags.join(" · ")}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
