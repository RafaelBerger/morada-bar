import React from "react";
import "./header.css";

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

          <nav id="header-items">
            <a href="#sobre">Sobre</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#localizacao">Localização</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
