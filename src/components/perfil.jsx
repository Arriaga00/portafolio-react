import Foto from "../assets/perfil.png";
function Perfil() {
  return (
    <section className="text-gray-600  body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 pb-0 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-0 object-cover object-center rounded"
          alt="andres"
          src={Foto}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-5 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-[#f5f5f5]">
            Hey, soy arriaga
          </h1>
          <p className="text-black pb-2 font-bold text-lg dark:text-[#eaebf1] ">
            <span className="text-[#f26c64]"> Front end</span> |
            <span className="text-[#edb614]"> Back end</span>
          </p>
          <p className="mb-3 leading-relaxed text-[#24282f] dark:text-[#f5f5f5] ">
            Mi misión es utilizar mis habilidades técnicas y creatividad para
            desarrollar soluciones web innovadoras que impulsen el crecimiento y
            el éxito de las empresas. <span className="bg-green-200  text-green-500 py-1 px-2 rounded-md font-bold dark:bg-violet-200 dark:text-violet-500 ">Disponible para trabajar</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
