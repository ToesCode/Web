import Reveal from "@/components/ui/Reveal";
import { contacto } from "@/lib/data";

export default function Contacto() {
  return (
    <section id="contacto" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <Reveal className="bg-surface border border-line rounded-[20px] px-6 py-16 md:px-12 text-center">
          <div className="font-sans text-[13px] font-semibold tracking-wider uppercase text-accent mb-4.5 flex justify-center">
            Contacto
          </div>
          <h2 className="font-display font-bold text-[clamp(26px,3.2vw,36px)] leading-snug tracking-tight mb-4 max-w-[20ch] mx-auto">
            ¿Tienes algo en mente?
          </h2>
          <p className="text-muted text-base max-w-[52ch] mx-auto mb-8">
            No necesitas tener todo pensado. Cuéntanos la idea, el problema o
            simplemente qué te gustaría hacer.
          </p>
          <div className="flex justify-center mb-1.5">
            <a
              href={`mailto:${contacto.email}`}
              className="text-[14.5px] font-semibold px-6 py-3.5 rounded-full bg-accent text-white transition-all hover:-translate-y-1 hover:bg-accent-hover"
            >
              Conversemos →
            </a>
          </div>
          <p className="text-muted text-[14.5px]">{contacto.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
