import React from "react";
import "./cardapio.css";
import cardapioLanche1 from "../../assets/images/cardapio-lanche1.png";
import cardapioLanche2 from "../../assets/images/cardapio-lanche2.png";
import cardapioPorcoes1 from "../../assets/images/cardapio-porcoes1.png";
import cardapioPorcoes2 from "../../assets/images/cardapio-porcoes2.png";

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
                src={cardapioLanche1}
                alt="Primeira parte do cardápio de lanches"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={cardapioLanche2}
                alt="Segunda parte do cardápio de lanches"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={cardapioPorcoes1}
                alt="Primeira parte do cardápio de porções"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={cardapioPorcoes2}
                alt="Segunda parte do cardápio de porções"
              />
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
    </>
  );
};

export default Cardapio;
