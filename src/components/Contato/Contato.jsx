import React from "react";
import "./contato.css";
import Card from "../Card/Card";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contato = () => {
  return (
    <section id="contato">
      <h3>Contato</h3>
      <div className="cards-container">
        <Card
          link="mailto:g2l.morada@gmail.com"
          icone={<MdEmail />}
          titulo="E-mail"
          conteudo="g2l.morada@gmail.com"
          cta="Mandar e-mail"
        />
        <Card
          link="https://wa.me/5511998074225"
          icone={<RiWhatsappFill />}
          titulo="WhatsApp"
          conteudo="(11) 99807-4225"
          cta="Mandar mensagem"
        />
        <Card
          link="tel:+551123252197"
          icone={<BsFillTelephoneFill />}
          titulo="Telefone"
          conteudo="(11) 2325-2197"
          cta="Ligar"
        />
      </div>
    </section>
  );
};

export default Contato;
