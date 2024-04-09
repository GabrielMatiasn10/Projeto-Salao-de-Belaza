import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import Servicos from "./components/Servicos/Servicos";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Contato from "./components/Contato/Contato"; 
import Footer from "./components/Footer/Footer";  


function App() {
  return (
   <div>
    <Header />
    <Inicio />
    <Servicos />
    <Depoimentos />
    <Contato /> 
    <Footer />
   </div>
  );
}
export default App;
