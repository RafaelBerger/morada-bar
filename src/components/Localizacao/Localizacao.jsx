import React from "react";
import "./localizacao.css";

const Localizacao = () => {
  return (
    <section id="localizacao">
      <h3>Localização</h3>
      <article>
        <p>
          Rua das Figueiras 2434
          <br /> Santo André - SP
        </p>
        <div className="localizacao-bg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.5308212128125!2d-46.54739025885419!3d-23.63735817835472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43e3a91f38ab%3A0x512dd9db517d0ce8!2sMorada%20%7C%20Rango%20e%20Birita!5e0!3m2!1spt-BR!2sbr!4v1651090981963!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            id="mapa"
          />
        </div>
      </article>
    </section>
  );
};

export default Localizacao;
