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
              O MORADA nasceu para todos se sentirem em casa em qualquer rolê e
              para resolver uma dor latente no público do ABC: Sair de suas
              cidades para viver experiências que não encontram por aqui.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Sobre;
