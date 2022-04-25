import React from "react";
import "./card.css";

function Card(props) {
  return (
    <>
      <article className="card-bg">
        <div className="icone-card">{props.icone}</div>
        <div className="texto-container">
          <h1 className="titulo-card">{props.titulo}</h1>
          <p className="conteudo-card">{props.conteudo}</p>
        </div>
        <a className="link-card" href={props.link} target="_blank">
          {props.cta}
        </a>
      </article>
    </>
  );
}

export default Card;
