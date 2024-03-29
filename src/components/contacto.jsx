import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Separador from "./separador"

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lsskepv', 'template_38v78hb', form.current, '2Y8aVG84pYddMGfJc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <Separador name={'Contactame'}/>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-2 mx-auto flex justify-center  flex-wrap">
          <div className="lg:w-2/4  md:w-2/3 bg-[#f5f5f5] flex flex-col justify-center w-full md:py-8 mt-8 md:mt-0 dark:bg-[#131825]">
            <h2 className="text-[#e27469] text-2xl mb-1 fontMedium title-font font-extrabold ">Contactame</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative mt-5 mb-4">
                <input type="text" id="name" name="user_name" placeholder="Nombre" className="w-full bg-[#f5f5f5] dark:border-[#26304b] dark:bg-[#131825] rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
              </div>
              <div className="relative mt-5 mb-4">
                <input type="email" id="email" name="email_id" placeholder=" Tu email@" className="w-full bg-[#f5f5f5] dark:border-[#26304b] dark:bg-[#131825] rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mt-5 mb-4">
                <textarea id="message" name="message" placeholder="Mensaje" className="w-full bg-[#f5f5f5] dark:border-[#26304b] dark:bg-[#131825] rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 dark:text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <input type='submit' value={'Enviar'} className="text-white bg-[#30bf93] py-2 px-2 cursor-pointer  rounded-full w-2/4 hover:scale-105 text-lg transition ease-in-out duration-300 font-bold"/>
              <p className="text-xs text-gray-500 mt-3 dark:text-[#eaebf1]">Si tienes dudas, este es el mejor momento de preguntar <br /> Enviame un mail ✅.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
