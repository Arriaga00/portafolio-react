import './App.css'
import NavBar from './components/navBar'
import Perfil from './components/perfil'
import RedesSociales from './components/redesSociales'
import Proyectos from './components/proyectos'
import Habilidades from './components/habilidades'
import Academico from './components/academico'
import Contacto from './components/contacto'
import Pie from './components/pie'
import { useState } from 'react'
import ModalAcercaDeMi from './components/modalAcercaDeMi'


function App() {
  const [abrirModal ,setAbrirModal] = useState(false)
  return (
    <>
    <NavBar setAbrirModal={setAbrirModal}/>
    <Perfil/>
    <RedesSociales />
    <Proyectos/>
    <Habilidades/>
    <Academico/>
    <Contacto/>
    <Pie/>
    <ModalAcercaDeMi setAbrirModal={setAbrirModal} abrirModal={abrirModal} />
    </>
  )
}

export default App
