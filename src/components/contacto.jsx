import Separador from "./separador"

const Contacto = () => {
  return (
    <>
      <Separador name={'Contactame'}/>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 border-2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.270407552197!2d-75.63909782432118!3d6.094232028001477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46870e492f78a7%3A0x3b8342986d529b2a!2sMontpellier%20Plaza!5e0!3m2!1ses!2sco!4v1704924623206!5m2!1ses!2sco" style={{filter: "  opacity(0.5)"}}></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Direccion</h2>
                <p className="mt-1">Calle 126 a sur #50-45 Caldas, Antioquia, Colombia</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">andresfelipearriagam@outlook.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">CELULAR</h2>
                <p className="leading-relaxed">300-721-3329</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-[#f5f5f5] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-[#e27469] text-2xl mb-1 font-medium title-font font-extrabold ">Contactame</h2>
            <form action="">
              <div className="relative mt-5 mb-4">
                <input type="text" id="name" name="name" placeholder="nombre y apellido" className="w-full bg-[#f5f5f5] rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
              </div>
              <div className="relative mt-5 mb-4">
                <input type="email" id="email" name="email" placeholder=" Tu email@" className="w-full bg-[#f5f5f5] rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mt-5 mb-4">
                <textarea id="message" name="message" placeholder="mensaje" className="w-full bg-[#f5f5f5] rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-[#30bf93] py-2 px-6   rounded-full w-2/3 hover:scale-105 text-lg transition ease-in-out duration-300 font-bold">Enviar</button>
              <p className="text-xs text-gray-500 mt-3">Si tienes dudas, este es el mejor momento de preguntar <br /> Enviame un mail ✅.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
