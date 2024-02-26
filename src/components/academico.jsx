import Separador from "./separador";
import DetalleAcademico from "./detalleAcademico";

const Academico = () => {
  return (
    <>
      <Separador name="Academico" />
      {/***************** * Experiencia ********************/}
      <section className="">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 ">
            <div className=" relative col-span-12 px-4 space-y-6 sm:col-span-9 ">
              <div className=" col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 dark:before:bg-[#26304b]  before:bg-[#d2d5da]">
                <div className=" pulsing-dot flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#30be93] dar  ">
                  <DetalleAcademico titulo={'Analisis y desarrollo de software'} color={'text-xs tracki uppercase text-[#30bf93]'} descripcion={'Este programa está diseñado para formar profesionales capaces de diseñar, construir y mantener sistemas de información acordes a las necesidades organizacionales. Se analiza, diseña, desarrolla, implementa y mantene sistemas de software.'} tiempo={'Cursando'}/>
                </div>
                <div className="pulsing-dot flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px]  before:bg-[#30be93] ">
                   <DetalleAcademico titulo={'Bootcamp Enyoi'} tiempo={'Cursando'} color={'text-xs tracki uppercase text-[#30bf93]'} descripcion={'Desarrollador full stack,  maneja tanto el desarrollo front-end (interfaz y experiencia del usuario) como el back-end (programación y mantenimiento de la arquitectura interna) de un sitio web'}/>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px]  before:bg-[#1fb4ff]">
                   <DetalleAcademico titulo={'Ingenieria Mecatronica'} color={'text-xs tracki uppercase text-[#56b1f9]'} descripcion={'Tecnologico metropolitano: 3 semestres certificables'} tiempo={'Truncado'}/>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px]  before:bg-[#1fb4ff]">
                   <DetalleAcademico titulo={'Gestion del talento humano'} color={'text-xs tracki uppercase text-[#56b1f9]'} descripcion={'Un técnico de gestión del talento humano es responsable de la administración de personal, gestión de relaciones laborales, búsqueda de mecanismos de retribución, mejora del clima laboral, selección y reclutamiento, desarrollo personal, evaluación de desempeño, formación de trabajadores y retención de talento. Fenicia: Educacion media certificable '} tiempo={'Finalizado'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academico;
