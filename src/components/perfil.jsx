import Foto from '../assets/perfil.png'
function Perfil(){


    return (
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 pb-0 justify-center items-center">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-0 object-cover object-center rounded" alt="andres" src={Foto} />
          <div className="w-full md:w-2/3 flex flex-col mb-5 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Andres Felipe Arriaga Molano</h1>
            <p className="text-black pb-2 font-bold text-lg "> <span className='text-[#f26c64]'> Front end</span> | <span className='text-[#edb614]'>Developer</span></p>
            <p className="mb-3 leading-relaxed text-[#24282f] "> Mi misión es utilizar mis habilidades técnicas y creatividad para desarrollar soluciones web innovadoras que impulsen el crecimiento y el éxito de las empresas.</p>
          </div>
        </div>
      </section>
    )
  
}

export default Perfil
