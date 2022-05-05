import React from "react";
import "../Apresentacao/apresentacao.css";
import LogoApresentacao from "../../assets/images/logo-apresentacao.png";
import Sanduiche from "../../assets/images/sanduiche.png";
import Sanduiche2 from "../../assets/images/sanduiche2.jpg";
import Sanduiche3 from "../../assets/images/sanduiche3.jpg";
import Sanduiche4 from "../../assets/images/sanduiche4.jpg";
import Sanduiche6 from "../../assets/images/sanduiche6.jpg";
import bolinho from "../../assets/images/bolinho.jpg";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

const Apresentacao = () => {
  return (
    <>
      <div id="apresentacao-bg">
        <div id="apresentacao-items">
          <div>
            <img src={LogoApresentacao} alt="Logo de apresentação" />
          </div>
          <div>
            <img src={Sanduiche} alt="Lanche de apresentação" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Apresentacao;
