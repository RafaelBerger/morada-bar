import React from "react";
import Card from "../Card/Card";
import { SiIfood } from "react-icons/si";

import "./ifood.css";

const Ifood = () => {
  return (
    <section className="centralizar">
      <h3>Delivery</h3>
      <div className="centralizar espacamento-baixo" id="espacamento-secao">
        <Card
          icone={<SiIfood />}
          titulo="Ifood"
          conteudo="Nos visite no Ifood!"
          link="https://www.ifood.com.br/delivery/santo-andre-sp/morada-rango-e-birita-campestre/33dc8023-b092-4d90-853d-58d0074c5592?UTM_Medium=share"
          cta="Ir para Ifood"
        />
      </div>
    </section>
  );
};

export default Ifood;
