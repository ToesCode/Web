import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { equipo } from "@/lib/data";

export default function Equipo() {
  return (
    <section id="equipo" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHead eyebrow="Equipo" title="Las personas detrás de esto." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
          {equipo.map((miembro) => (
            <Reveal key={miembro.iniciales} className="p-1">
              <div className="w-13 h-13 rounded-full bg-accent-soft text-accent flex items-center justify-center font-display font-bold text-base mb-4">
                {miembro.iniciales}
              </div>
              <h4 className="font-display font-bold text-[15.5px] mb-1">
                {miembro.nombre}
              </h4>
              <div className="text-muted text-[13.5px]">{miembro.rol}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
