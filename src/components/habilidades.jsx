import Separador from "./separador"


 const Habilidades = () => {

  const estilo = 'flex items-center bg-[#f5f5f5] dark:bg-[#131825] dark:text-[#eaebf1] dark:border-[#26304b] text-[#414855] border-2  text-sm font-bold px-4 py-2 rounded-full'
  return (
    <>
        <Separador name={'Habilidades y Conocimiento'}/>
        {/* ***************Pildoras********************* */}
        <div className="flex space-x-4 pl-4 p-x-5 flex-wrap gap-y-3 mb-10">
            <div className={estilo}> Aprendizaje constante</div>
            <div className={estilo}> Tecnologia de la informacion</div>
            <div className={estilo}> Autoconfianza</div>
            <div className={estilo}> Creatividad</div>
            <div className={estilo}> Estructura de contenido</div>
            <div className={estilo}> Diseño web</div>
            <div className={estilo}> Trabajo en equipo</div>
            <div className={estilo}> Herramientas de interaccion</div>
            <div className={estilo}> Diseño web</div>
        </div>

    </>
  )
}

export default Habilidades