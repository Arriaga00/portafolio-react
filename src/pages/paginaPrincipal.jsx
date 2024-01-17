
import Perfil from "../components/perfil";
import RedesSociales from "../components/redesSociales";
import Proyectos from "../components/proyectos";
import Habilidades from "../components/habilidades";
import Academico from "../components/academico";
import Contacto from "../components/contacto";
import Pie from "../components/pie";


function PaginaPrincipal() {
  return (
    <>
        <Perfil />
        <RedesSociales />
        <Proyectos />
        <Habilidades />
        <Academico />
        <Contacto />
        <Pie />
    </>
  );
}

export default PaginaPrincipal;
