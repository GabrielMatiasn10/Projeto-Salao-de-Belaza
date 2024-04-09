import React from "react";
import "./Header.css";
import Servicos from "../Servicos/Servicos";

function Header() {
  return (
    <header className="header">
      <a className="inicio" href="">Inicio</a>
     
      <a href="#">Depoimentos</a>
      <a href="#">Contato</a>
    </header>
  );
}

export default Header;