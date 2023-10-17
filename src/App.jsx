import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import Sobre from "./components/Sobre/Sobre";
import Servicos from "./components/Servicos/Servicos";


function App() {
  return (
   <div>
    <Header />
    <Inicio />
    <Sobre />
    <Servicos />
   </div>
  );
}

export default App;
