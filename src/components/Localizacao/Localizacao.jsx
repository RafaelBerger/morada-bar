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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.2633341452904!2d-46.54726421452686!3d-23.637568532041605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42d18e0b26ad%3A0x34eb6e8be8106ef4!2sR.%20das%20Figueiras%2C%202434%20-%20Jardim%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009080-301!5e0!3m2!1spt-BR!2sbr!4v1650732220168!5m2!1spt-BR!2sbr"
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
