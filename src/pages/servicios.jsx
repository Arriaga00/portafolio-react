import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import CardServicios from '../components/cardServicios';
const Servicio = () => {

  return (
    <>
      <div className='flex w-full pl-5 h-32 justify-start items-end'>
        <NavLink to='/inicio' className=' w-12  h-8 flex justify-center items-center hover:scale-110 transition ease-in-out duration-300'>
        <FontAwesomeIcon icon={faArrowLeftLong} className='dark:text-white text-2xl'/>
        </NavLink>
        <div className='w-1/2  flex justify-end' >
            <h2 className='text-4xl font-bold text-[#9dbeff]'>Servicios</h2>
        </div>
      </div>
      <section className='flex w-full  pt-40 flex-wrap'>
        <CardServicios nombre={'UI Designe'} descripcion={'UI Designe'}/>
        <CardServicios nombre={'UI Designe'} descripcion={'UI Designe'}/>
        <CardServicios nombre={'UI Designe'} descripcion={'UI Designe'}/>
        <CardServicios nombre={'UI Designe'} descripcion={'UI Designe'}/>
      </section>
      </>
  );
};

export default Servicio;
