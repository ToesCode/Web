import type { ReactElement } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { servicios } from "@/lib/data";

const icons: Record<string, ReactElement> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8M12 18v3" />
    </>
  ),
  sistemas: <path d="M14.7 3.3l6 6-9.4 9.4-6.6.6.6-6.6z" />,
  automatizacion: <path d="M17 3l-9 9 4 4-9 5 5-9 4 4 9-9z" />,
};

export default function Servicios() {
  return (
    <section id="servicios" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHead
          eyebrow="Lo que hacemos"
          title="Software, sin complicarlo de más."
          description="Nos enfocamos en construir soluciones que realmente sirvan para lo que necesitas."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
          {servicios.map((servicio) => (
            <Reveal
              key={servicio.id}
              className="bg-surface border border-line rounded-2xl p-7.5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_34px_-22px_rgba(23,26,31,0.18)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-9.5 h-9.5 mb-5 text-accent"
              >
                {icons[servicio.icon]}
              </svg>
              <h3 className="font-display font-bold text-[17px] mb-2.5">
                {servicio.titulo}
              </h3>
              <p className="text-muted text-[14.5px]">{servicio.descripcion}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
