import React from "react";
import "./header.css";
import "../../index.css";

const Header = () => {
  return (
    <>
      <div id="header-container">
        <div id="title">
          <a href="#" id="morada-home">
            Morada
          </a>
        </div>

        <div id="header-items">
          <a href="#">Sobre</a>
          <a href="#">Cardápio</a>
          <a href="#">Localização</a>
          <a href="#">Contato</a>
        </div>
      </div>
    </>
  );
};

export default Header;
