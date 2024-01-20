const Pie = () => {
  return (
    <>
      <footer className="bg-gray-100 dark:bg-[#131825]  ">
        <div className="relative mx-auto max-w-screen-xl px-4 pb-5 sm:px-6 lg:px-8 lg:pt-3 dark:bg-[#131825] dark:border-[#26304b] dark:border-2 rounded-lg border-2 ">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center gap-3 text-teal-600 lg:justify-start">
                <img
                  src="https://i.ibb.co/zFYKcSC/adios.png"
                  alt="adios"
                  className="w-28 h-30"
                />
                <p className="mx-auto flex items-center max-w-md text-center leading-relaxed text-gray-500 lg:text-left dark:text-[#eaebf1]">
                Gracias por visitar mi portafolio. Espero que hayas encontrado lo que buscabas y que hayas disfrutado de tu visita. Si tienes alguna pregunta, sugerencia o simplemente quieres decir hola, no dudes en contactarme. ¡Hasta la próxima!
                </p>
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-gray-500 lg:text-right dark:text-[#eaebf1]">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Pie;
