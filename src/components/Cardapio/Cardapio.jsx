import { React, useState } from "react";
import "./cardapio.css";
// import cardapioRango from "../../assets/images/cardapio-rango.png";
// import cardapioBirita from "../../assets/images/cardapio-birita.png";
import cardapioRango1 from "../../assets/images/cardapio-rango1.jpg";
import cardapioRango2 from "../../assets/images/cardapio-rango2.jpg";
import cardapioBirita1 from "../../assets/images/cardapio-birita1.jpg";
import cardapioBirita2 from "../../assets/images/cardapio-birita2.jpg";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Cardapio = () => {
  return (
    <>
      <section id="cardapio">
        <article id="cardapio-bg">
          <h3>Cardápio</h3>
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            id="image-bg"
          >
            <SwiperSlide>
              <img
                src={cardapioRango1}
                alt="Primeira parte do cardápio de lanches"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={cardapioRango2}
                alt="Segunda parte do cardápio de lanches"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={cardapioBirita1}
                alt="Primeira parte do cardápio de bebidas"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={cardapioBirita2}
                alt="Segunda parte do cardápio de bebidas"
              />
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
    </>
  );
};

export default Cardapio;
