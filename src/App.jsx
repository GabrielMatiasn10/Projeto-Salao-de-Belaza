import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import Sobre from "./components/Sobre/Sobre";
import Servicos from "./components/Servicos/Servicos";
import Depoimentos from "./components/Depoimentos/Depoimentos";


function App() {
  return (
   <div>
    <Header />
    <Inicio />
    <Sobre />
    <Servicos />
    <Depoimentos />
   </div>
  );
}

export default App;
