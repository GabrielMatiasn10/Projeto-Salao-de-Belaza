import React from "react";
import {FiSun, FiToggleRight, FiShoppingBag} from "react-icons/fi";
import "./Servicos.css";

function Servicos() {
  return (
    <div className="servicos">
      <h1>Serviços</h1>
      <p>
        Com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais.
      </p>
      <div className="servicos__container">
        <ServiceItem
           iconName={FiSun}
          title="Terapia capilar"
          description="Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos."
        />
        <ServiceItem
            iconName={FiShoppingBag}
          title="Corte de cabelo"
          description="A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos."
        />
         <ServiceItem
          iconName={FiToggleRight}
          title="Tratamentos"
          description="O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo."
        />
      </div>
    </div>
  );
}

function ServiceItem({ iconName: IconName, title, description }) {
  return (
    <div className="service-item">
      <IconName size={80} color="#69B99D" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Servicos;
