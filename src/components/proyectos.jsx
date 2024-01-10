import Cine from '../assets/miCine.png'
import PrimerPortafolio from '../assets/primerPortafolio.png'
import Vitejs from '../assets/vitejs.png'
import Tailwin from '../assets/tailwind.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Separador from './separador';






export const Proyectos = () => {
  return (
    <>
      <Separador name='Proyectos'/>
      {/* *************************************************Seccion****************************************** */}
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto mb-10">
    <div className="flex flex-wrap -m-4 gap-x-5 gap-y-5 justify-center">
        {/* Card primer portafolio*/}
      <div className="p-4 lg:w-2/5 border-2 border-[#d2d5da] rounded-lg m-1 hover:scale-105 transition ease-in-out duration-200 ">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <a href="https://portafolioarriaga.vercel.app/" className='flex-shrink-0  w-48 h-48 sm:mb-0 mb-4 cursor-pointer'>
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={PrimerPortafolio} />
        </a>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900 font-bold ">Primer Portafolio 📃</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">Es el primer portafolio que decidi a realizar para aventarme a este mundo de la programacion.</p>
            <span className="inline-flex">
                {/* iconos tecnologia */}
                <FontAwesomeIcon icon={faJs} className='text-[#f8d65b] w-5 h-5' />
                <FontAwesomeIcon icon={faHtml5} className='text-[#e06e3c] w-5 h-5' />
                <FontAwesomeIcon icon={faCss3Alt} className='text-[#4994ec] w-5 h-5' />
                <FontAwesomeIcon icon={faGitAlt} className='text-[#de5d40] w-5 h-5' />
                <FontAwesomeIcon icon={faGithub} className='text-black w-5 h-5' />
            </span>
          </div>
        </div>
      </div>
      {/* Card Cine */}
      <div className="p-4 lg:w-2/5 border-2 border-[#b56492] rounded-lg m-1 hover:scale-105 transition ease-in-out duration-300">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <a href="https://my-cine.vercel.app/" className='flex-shrink-0  w-48 h-48 sm:mb-0 mb-4   cursor-pointer'>
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Cine} />
            </a>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900 font-bold ">My Cine</h2>
            <h3 className="text-gray-500 mb-3">Designer</h3>
            <p className="mb-4">Creando una interfaz simulada de una cartelera de cine 🎥.. 
            <br /> Consumo de Api Disney
            <br /> ...
            
            </p>
            <span className="inline-flex">
            <FontAwesomeIcon icon={faReact} className='text-[#93e8f5] w-5 h-5'/>
            <FontAwesomeIcon icon={faNodeJs} className='text-[#97c33c] w-5 h-5'/>
            <FontAwesomeIcon icon={faJs} className='text-[#f8d65b] w-5 h-5'/>
            <FontAwesomeIcon icon={faHtml5} className='text-[#e06e3c] w-5 h-5' />
            <FontAwesomeIcon icon={faCss3Alt} className='text-[#4994ec] w-5 h-5' />
            <FontAwesomeIcon icon={faGitAlt} className='text-[#de5d40] w-5 h-5' />
            <FontAwesomeIcon icon={faGithub} className='text-black w-5 h-5' />
            <img src={Vitejs} alt="vite.js"  className='w-7 h-5'/>
            <img src={Tailwin} alt="tailwind css" className='w-5 h-4 pt-1'/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* *************************************************Seccion****************************************** */}

    </>
  );
};

export default Proyectos;
