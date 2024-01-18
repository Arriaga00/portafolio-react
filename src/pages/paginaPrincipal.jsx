
import Perfil from "../components/perfil";
import RedesSociales from "../components/redesSociales";
import Proyectos from "../components/proyectos";
import Habilidades from "../components/habilidades";
import Academico from "../components/academico";
import Contacto from "../components/contacto";
  


function PaginaPrincipal() {
  return (
    <>
        <Perfil />
        <RedesSociales />
        <Proyectos />
        <Habilidades />
        <Academico />
        <Contacto />
    </>
  );
}

export default PaginaPrincipal;
