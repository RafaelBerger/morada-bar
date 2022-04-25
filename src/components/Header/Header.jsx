import React from "react";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <a href="#" className="brand-title">
          Morada
        </a>
        <a
          className="toggle-button"
          onClick={() => setIsNavBarOpen(!isNavBarOpen)}
        >
          <span className={`bar ${isNavBarOpen ? "bar1" : ""}`}></span>
          <span className={`bar ${isNavBarOpen ? "bar2" : ""}`}></span>
          <span className={`bar ${isNavBarOpen ? "bar3" : ""}`}></span>
        </a>
        <div className={`navbar-links ${isNavBarOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#cardapio">Cardápio</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a href="#localizacao">Localização</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
