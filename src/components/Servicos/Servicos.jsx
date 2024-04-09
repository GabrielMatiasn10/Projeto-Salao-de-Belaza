import React from "react";
import {FiSun, FiToggleRight, FiShoppingBag} from "react-icons/fi";
import "./Servicos.css";

function Servicos() {
  return (
    <div className="servicos">
      <h1>Nossos Serviços</h1>
      <p className="text-servicos">
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
      <div className="gallery">
  <div className="photos">
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsofthair.com.br%2Fwp-content%2Fuploads%2F2019%2F09%2F307614-treinamento-e-desenvolvimento-para-os-colaboradores-do-salao-de-beleza-encantar-os-clientes.jpg&f=1&nofb=1&ipt=ddf464e28d432797eea64a24bf6879a3022d74b1537e4798f97f93109f6f64ef&ipo=images"
      className="photo"
    />
  </div>
 
  <div className="photos">
    <img
      src="https://cdn.pixabay.com/photo/2018/04/03/23/04/woman-3288365_640.jpg"
      alt=""
      className="photo"
    />
  </div>
  <div className="photos">
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F01%2F5e%2Fca%2F015eca74d528eb4e48300317b9a6d5be.jpg&f=1&nofb=1&ipt=7dadfdb8483767e7f3b42fc6ddb3e3b1843a102671be70a04a7a45dbedee6143&ipo=images"
      alt=""
      className="photo"
    />
  </div>
</div>
    </div>
  );
}

function ServiceItem({ iconName: IconName, title, description }) {
  return (
    <div className="service-item">
      <IconName size={80} color="#9e94f7" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Servicos;
