import React from "react";
import "./footer.css";
import logoMorada from "../../assets/images/logo.png";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <section id="footer">
        <footer className="footer-container">
          <div>
            <img
              className="logo-footer"
              src={logoMorada}
              alt="Logo do Morada"
            />
          </div>
          <div className="link-secoes">
            <a href="#sobre">Sobre</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#localizacao">Localização</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="redes-sociais">
            <a href="https://www.instagram.com/moradabar/" target="_blank">
              <RiInstagramFill />
            </a>
            <a href="https://www.facebook.com/moradabaroficial" target="_blank">
              <BsFacebook />
            </a>
            <a href="https://wa.me/5511998074225" target="_blank">
              <RiWhatsappFill />
            </a>
          </div>
          <div className="copyright">
            Morada Bar &copy; Todos os direitos reservados
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
