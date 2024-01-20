import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Servicio from "./pages/servicios";
import PaginaPrincipal from "./pages/paginaPrincipal";
import NavBar from "./components/navBar";
import { useState } from "react";
import ModalAcercaDeMi from "./components/modalAcercaDeMi";
import Pie from "./components/pie";

function App() {
  const [abrirModal, setAbrirModal] = useState(false);
  return (
    <>
      <Router>
        <NavBar setAbrirModal={setAbrirModal} />
        <ModalAcercaDeMi setAbrirModal={setAbrirModal} abrirModal={abrirModal} />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/conocimiento" element={<Servicio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Pie/>
      </Router>
    </>
  );
}

export default App;
