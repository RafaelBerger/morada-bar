import React from "react";
import "./header.css";
import "../../index.css";

const Header = () => {
  return (
    <>
      <div id="header-bg">
        <div id="header-container">
          <div id="title">
            <a href="#" id="morada-home">
              Morada
            </a>
          </div>

          <div id="header-items">
            <a href="#sobre">Sobre</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#localizacao">Localização</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
