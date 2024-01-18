import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import CardServicios from '../components/cardServicios';
const Servicio = () => {
  return (
    <>
      <div className='mb-20'>
        <div className="flex w-full pl-5 h-32 justify-start items-end">
          <NavLink
            to="/inicio"
            className=" w-12  h-8 flex justify-center items-center hover:scale-110 transition ease-in-out duration-300"
          >
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              className="dark:text-white text-2xl"
            />
          </NavLink>
          <div className="w-1/2  flex justify-end">
            <h2 className="text-4xl font-bold text-[#9dbeff]">Servicios</h2>
          </div>
        </div>
        <section className="flex w-full  pt-10 flex-wrap">
          <CardServicios
            nombre={"Desarrollo de interfaces de usuario"}
            descripcion={"UI/UX"}
            img={"https://i.ibb.co/7STp4G3/figma-macos-bigsur-icon-190183.png"}
          />
          <CardServicios
            nombre={"UI Diseño responsivo"}
            descripcion={"PC, Tables, Movil"}
            img={"https://i.ibb.co/4Vt3hF3/1485476108-artboard-1-78541.png"}
          />
          <CardServicios
            nombre={"Pruebas y depuración"}
            descripcion={"Rendimiento"}
            img={"https://i.ibb.co/pnSMQFB/debug-icon-214412.png"}
          />
        </section>
        <div className="flex w-full  pt-20 flex-wrap justify-center pb-9 ">
          <h2 className="text-4xl font-bold text-[#9dbeff] flex justify-center">
            Tecnologias
          </h2>
        </div>
        <section className="flex  flex-wrap">
          <CardServicios
            nombre={"HTML"}
            descripcion={"Maquetacion"}
            img={"https://i.ibb.co/cLrgQTw/html-5.png"}
          />
          <CardServicios
            nombre={"CSS"}
            descripcion={"Estilos Css"}
            img={"https://i.ibb.co/kcN2Pd4/css-1.png"}
          />
          <CardServicios
            nombre={"JavaScript"}
            descripcion={"Lenguaje de programacion"}
            img={
              "https://i.ibb.co/fX0sZ3m/Unofficial-Java-Script-logo-2-svg.png"
            }
          />
          <CardServicios
            nombre={"React js"}
            descripcion={"Maquetacion"}
            img={"https://i.ibb.co/m8ckHfy/react-1024x1024.jpg"}
          />
          <CardServicios
            nombre={"Tailwind Css"}
            descripcion={"Preprocesador Css"}
            img={
              "https://i.ibb.co/8mDBBJK/file-type-tailwind-icon-130128.png  "
            }
          />
          <CardServicios
            nombre={"Vite"}
            descripcion={"Empaquetador de aplicaciones"}
            img={"https://i.ibb.co/377gwn2/vitejs.png"}
          />
          <CardServicios
            nombre={"Node js"}
            descripcion={""}
            img={"https://i.ibb.co/HXhGJ6Q/R.png"}
          />
          <CardServicios
            nombre={"Git"}
            descripcion={"Manejo de versiones"}
            img={"https://i.ibb.co/fN1Jjz6/git-icon-130933.png"}
          />
          <CardServicios
            nombre={"GitHub"}
            descripcion={"Manejo de versiones en la nube"}
            img={
              "https://i.ibb.co/7Qkp6xB/github-character-icon-icons-com-73547.png"
            }
          />
        </section>
        <div className="flex w-full  pt-20 flex-wrap justify-center pb-9 ">
          <h2 className="text-4xl font-bold text-[#9dbeff] flex justify-center">
            Aprendiendo{" "}
          </h2>
        </div>
        <section className="flex  flex-wrap">
          <CardServicios
            nombre={"SQL"}
            descripcion={"Lenguaje base de datos relacionales"}
            img={"https://i.ibb.co/MkJzbtK/file-type-sql-icon-130152.png"}
          />
          <CardServicios
            nombre={"Mongo DB"}
            descripcion={"Base de datos no relacional"}
            img={"https://i.ibb.co/GVhXm0b/file-type-mongo-icon-130383.png"}
          />
        </section>
      </div>
    </>
  );
};

export default Servicio;
