import React from "react";
import "../Apresentacao/apresentacao.css";
import LogoApresentacao from "../../assets/images/logo-apresentacao.png";
import SanduicheApresentacao from "../../assets/images/sanduiche.png";

const Apresentacao = () => {
  return (
    <>
      <div id="apresentacao-bg">
        <div id="apresentacao-items">
          <div>
            <img src={LogoApresentacao} alt="Logo de apresentação" />
          </div>
          <div>
            <img src={SanduicheApresentacao} alt="Lanche de apresentação" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Apresentacao;
