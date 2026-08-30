import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { proceso } from "@/lib/data";

export default function Proceso() {
  return (
    <section id="proceso" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHead eyebrow="Así trabajamos" title="Primero hablamos. Después construimos." />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {proceso.map((paso) => (
            <Reveal key={paso.numero}>
              <div className="font-display font-bold text-sm text-accent mb-3.5">
                {paso.numero}
              </div>
              <h3 className="font-display font-bold text-base mb-2">{paso.titulo}</h3>
              <p className="text-muted text-sm">{paso.descripcion}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
