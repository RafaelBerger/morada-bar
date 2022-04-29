import React from "react";
import "./sobre.css";
import ImagemSobre from "../../assets/images/sanduiche5.jpg";

const Sobre = () => {
  return (
    <section id="sobre">
      <article id="sobre-container">
        <h3>Sobre nós</h3>
        <div id="sobre-conteudo">
          <div id="sobre-imagem">
            <img src={ImagemSobre} alt="Sanduíche da seção sobre" />
          </div>
          <div id="sobre-texto">
            <h1>Bem-vindo ao Morada</h1>
            <p>
              Um bar como deve ser. Uma versão melhorada das suas lembranças de
              festa de família na infância: a sensação de conforto da casa dos
              avós, só que em uma eterna comemoração, sem adultos - apenas com
              seus primos preferidos - onde as possibilidades parecem infinitas
              e o mundo lá fora é incapaz de te alcançar.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Sobre;
