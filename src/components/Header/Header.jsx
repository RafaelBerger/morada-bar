import React from "react";
import "./header.css";

const Header = () => {
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  return (
    <>
      <nav className="navbar">
        <a href="#" className="brand-title">
          Morada
        </a>
        <a
          className="toggle-button"
          onClick={() => {
            navbarLinks.classList.toggle("active");
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#cardapio">Cardápio</a>
            </li>
            <li>
              <a href="#">Localização</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
