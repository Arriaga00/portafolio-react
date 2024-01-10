import Separador from "./separador";
import DetalleAcademico from "./detalleAcademico";

const Academico = () => {
  return (
    <>
      <Separador name="Academico" />
      {/***************** * Experiencia ********************/}
      <section className="">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className=" relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className=" col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-[#d2d5da]">
                <div className=" pulsing-dot flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#30be93]  ">
                  <DetalleAcademico titulo={'Analisis y desarrollo de software'} descripcion={'La Tecnologia me prepara para ser un profesional capaz de diseñar, desarrollar y mantener software que satisfaga las necesidades de los usuarios'} tiempo={'Cursando'}/>
                </div>
                <div className="pulsing-dot flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#30be93] ">
                   <DetalleAcademico titulo={'Bootcamp Enyoi'} tiempo={'Cursando'} descripcion={'Un Full Stack Developer es un profesional que trabaja tanto en el desarrollo front-end como en el back-end. Son responsables de diseñar, desarrollar y mantener plataformas completamente funcionales con bases de datos o servidores. Estos servidores no necesitan otras aplicaciones de terceros para construir un sistema completo desde cero.'}/>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#1fb4ff]">
                   <DetalleAcademico titulo={'Ingenieria Mecatronica'} descripcion={'Tecnologico metropolitano: 3 semestres certificables'} tiempo={'Truncado'}/>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#1fb4ff]">
                   <DetalleAcademico titulo={'Gestion del talento humano'} descripcion={'Fenicia: Educacion media certificable'} tiempo={'Finalizado'}/>
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
