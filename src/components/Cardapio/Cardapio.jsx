import { React, useState, useEffect } from "react";
import "./cardapio.css";
import CARDAPIO1 from "../../assets/images/cardapio1.png";
import CARDAPIO2 from "../../assets/images/cardapio2.png";
import CARDAPIO3 from "../../assets/images/cardapio3.png";
import CARDAPIO4 from "../../assets/images/cardapio4.png";
import CARDAPIO5 from "../../assets/images/cardapio5.png";
import CARDAPIO6 from "../../assets/images/cardapio6.png";
import CARDAPIO7 from "../../assets/images/cardapio7.png";
import CARDAPIO8 from "../../assets/images/cardapio8.png";
import CARDAPIO9 from "../../assets/images/cardapio9.png";
import CARDAPIO10 from "../../assets/images/cardapio10.png";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Cardapio = () => {
  const [slidePerView, setSlidePerView] = useState(
    window.matchMedia("(min-width: 1100px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 1100px)")
      .addEventListener("change", (e) => setSlidePerView(e.matches));
  }, []);

  return (
    <>
      <section id='cardapio'>
        <article id='cardapio-bg'>
          <h3>Cardápio</h3>
          <Swiper
            modules={[Navigation]}
            spaceBetween={slidePerView ? 0 : 8}
            slidesPerView={slidePerView ? 2 : 1}
            navigation
            scrollbar={{ draggable: true }}
            id='image-bg'
          >
            <SwiperSlide>
              <img src={CARDAPIO1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CARDAPIO2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CARDAPIO3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CARDAPIO4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CARDAPIO5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CARDAPIO6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CARDAPIO7} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CARDAPIO8} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CARDAPIO9} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CARDAPIO10} />
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
    </>
  );
};

export default Cardapio;
