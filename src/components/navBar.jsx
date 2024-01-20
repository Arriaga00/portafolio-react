import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


function NavBar({setAbrirModal}){
   const [tema,setTema] = useState(()=>{
    if(window.matchMedia('(prefers-color-scheme)').matches){
      return 'dark'
    }
    return 'claro'
   })
   const modoTema = ()=>{
    setTema(el => el === 'claro' ?'dark': 'claro' )
   }

   useEffect(()=>{
    if (tema === 'dark') {
      document.querySelector('body').classList.add('dark')
    }else{
      document.querySelector('body').classList.remove('dark')
    }
   },[tema])

  const colorYHover = "mr-5 text-black font-semibold cursor-pointer border-solid border-transparent hover:text-[#cf5d57] hover:text-red-500 hover:border-b-2 hover:border-red-500 hover:-translate-y-1 transition ease-in-out duration-200 dark:text-[#f5f5f5]"
    return (
      <>
          <header className="text-gray-600 body-font   ">
              <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <span className=" text-3xl titulo text-[#b56492] font-bold ">&lt;Portafolio /&gt; </span>
                </a>
                  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className={colorYHover} onClick={()=> setAbrirModal(true)}>Acerca de mi</a>
                    <NavLink to='/servicio' className={colorYHover}>Servicios</NavLink>
                  </nav>
                <button className=" items-center bg-gray-200 border-0 py-1 px-3 text-[#4d6cbc] focus:outline-none hover:bg-[#a0a1a5] rounded-full text-base mt-4 md:mt-0 hover:text-[#4d6cbc] transition ease-in-out duration-300 dark:bg-[#26304b] dark:hover:bg-[#3c496f]" onClick={modoTema}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                </button>
              </div>
          </header>
     </>
    )
  
}

export default NavBar