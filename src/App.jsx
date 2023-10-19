import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import Sobre from "./components/Sobre/Sobre";
import Servicos from "./components/Servicos/Servicos";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Contato from "./components/Contato/Contato"; 


function App() {
  return (
   <div>
    <Header />
    <Inicio />
    <Sobre />
    <Servicos />
    <Depoimentos />
    <Contato /> 
   </div>
  );
}

export default App;
