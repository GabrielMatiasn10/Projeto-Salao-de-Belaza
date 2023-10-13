import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a className="inicio" href="#">Inicio</a>
      <a href="#">Sobre</a>
      <a href="#">Servicos</a>
      <a href="#">Depoimentos</a>
      <a href="#">Contato</a>
    </header>
  );
}

export default Header;