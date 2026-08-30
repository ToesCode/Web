import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Proyectos from "@/components/sections/Proyectos";
import Proceso from "@/components/sections/Proceso";
import Nosotros from "@/components/sections/Nosotros";
import Equipo from "@/components/sections/Equipo";
import Contacto from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Proyectos />
      <Proceso />
      <Nosotros />
      <Equipo />
      <Contacto />
    </>
  );
}
