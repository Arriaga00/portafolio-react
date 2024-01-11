const DetalleAcademico = ({titulo,descripcion, tiempo, color}) => {
    return (
      <>
        <div className="space-y-4 ">
          <details className="w-full border rounded-lg border-2 transition ease-in-out duration-300 dark:border-[#26304b] ">
            <summary
              className="px-4 py-6 focus:outline-none focus-visible:ri dark:text-[#eaebf1]"
              style={{cursor: "default"}}
            >
              {titulo}
            </summary>
            <time className={color}>{tiempo}</time>
            <p className="px-4 py-6 pt-3 ml-4 -mt-4  dark:text-[#eaebf1]">
              {descripcion}
            </p>
          </details>
        </div>
      </>
    );
  };
  
  export default DetalleAcademico;
  
