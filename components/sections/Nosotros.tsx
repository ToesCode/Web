import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <SectionHead eyebrow="Quiénes somos" title="Somos un equipo pequeño." className="!mb-8" />
        <Reveal as="div" className="max-w-[64ch] [&>p]:text-muted [&>p]:text-base [&>p]:mb-4.5 [&>p:first-of-type]:text-text [&>p:first-of-type]:text-lg">
          <p>
            Empezamos haciendo proyectos juntos en la universidad. Nos gustó
            tanto construir cosas que decidimos seguir haciéndolo, esta vez
            para otras personas.
          </p>
          <p>
            Nos gusta trabajar cerca de quienes tienen la idea, hablar sin
            demasiadas vueltas y encontrar soluciones que realmente tengan
            sentido.
          </p>
          <p>
            Todavía estamos aprendiendo, pero también estamos construyendo. Y
            cada proyecto nos permite hacer ambas cosas mejor.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
