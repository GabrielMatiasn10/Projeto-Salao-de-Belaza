import React from "react";
import "./Sobre.css";

function Sobre() {
    return (
        <section className="sobre-nos">
        <div className="sobre-nos-content">
          <h2>Sobre nós</h2>
          <img className="sobre-img"
            src="https://beautvip.com/wp-content/uploads/2021/06/sonhar-cortando-cabelo-2048x1365.jpg"
            alt="Foto do interior do nosso salão"
          />
          <img className="sobre-img" src="http://www.unimed.coop.br/portalunimed/cartilhas/cuidados-salao-beleza/images/salao-beleza.jpg" alt="" />
          <p className="sobre">
            Bem-vindo ao nosso salão! Nós nos dedicamos a oferecer os melhores
            tratamentos para cabelo e beleza em um ambiente relaxante e
            acolhedor. Com uma equipe experiente e apaixonada, estamos empenhados
            em ajudar você a realçar sua beleza natural.
          </p>
       
        </div>
      </section>
    );  
}

export default Sobre;