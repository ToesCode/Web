import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-10">
      <div className="max-w-wrap mx-auto px-7 grid grid-cols-1 md:grid-cols-[1fr_0.95fr] gap-12 items-center">
        <div>
          <div className="font-sans text-[13px] font-semibold tracking-wider uppercase text-accent mb-4.5">
            Desarrollo de software
          </div>
          <h1 className="font-display font-extrabold text-[clamp(32px,4.6vw,48px)] leading-tight tracking-tight mb-5">
            Hacemos software que{" "}
            <span className="text-accent">resuelve problemas reales.</span>
          </h1>
          <p className="text-[17px] text-muted max-w-[46ch] mb-7.5">
            Somos un equipo pequeño de estudiantes de informática que convierte
            ideas, necesidades y problemas en soluciones digitales.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#contacto"
              className="text-[14.5px] font-semibold px-6 py-3.5 rounded-full bg-accent text-white transition-all hover:-translate-y-1 hover:bg-accent-hover"
            >
              Cuéntanos tu idea →
            </a>
            <a
              href="#proyectos"
              className="text-[14.5px] font-semibold px-6 py-3.5 rounded-full border border-line text-text transition-all hover:-translate-y-1 hover:border-text"
            >
              Ver proyectos
            </a>
          </div>
        </div>

        <Reveal className="relative h-[300px] md:h-[380px] mt-5 md:mt-0">
          <div className="absolute w-[230px] h-[170px] rounded-[18px] bg-accent-soft top-2.5 left-5 -rotate-[4deg] p-5 flex flex-col justify-between shadow-[0_20px_40px_-24px_rgba(23,26,31,0.18)]">
            <div>
              <div className="h-2 rounded bg-accent/35 mb-2 w-[70%]" />
              <div className="h-2 rounded bg-accent/35 mb-2 w-[45%]" />
            </div>
            <div className="h-2 rounded bg-accent/35 w-[30%]" />
          </div>

          <div className="absolute w-[190px] h-[190px] rounded-[18px] bg-warm-soft top-[150px] right-2.5 rotate-[5deg] flex items-center justify-center shadow-[0_20px_40px_-24px_rgba(23,26,31,0.18)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B5764F"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-16 h-16"
            >
              <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
              <circle cx="12" cy="12" r="4.5" />
            </svg>
          </div>

          <div className="absolute w-[210px] bg-surface border border-line bottom-0 left-[70px] -rotate-2 p-5.5 font-display font-semibold text-[15px] text-text rounded-[18px] shadow-[0_20px_40px_-24px_rgba(23,26,31,0.18)]">
            idea → algo real
            <span className="block font-sans font-normal text-[13px] text-muted mt-1.5">
              así empezó todo
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
