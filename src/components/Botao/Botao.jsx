import React from "react";
import "./botao.css";

const Botao = (props) => {
  return <button id="botao">{props.children}</button>;
};

export default Botao;
