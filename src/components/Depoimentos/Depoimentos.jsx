import React from "react";
import "./depoimentos.css";
import Botao from "../Botao/Botao";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const dadosDepoimentos = [
  {
    name: "César S",
    review:
      "Fantástico! Lanches muito bons... Especialmente o joelho de porco... Cerveja gelada! Preço justo... Ambiente excelente... Bar diferente dos padrões que vemos no ABC!!! Vida longa ao Morada!!!!",
  },
  {
    name: "Gabriel B",
    review:
      "Comida excepcional! Todos os lanches do cardápio são muito bons e valem muito a pena! Porções também! Uma melhor que a outra, sem falar da incrível rabanada com doce de leite. O ambiente também é incrível",
  },
  {
    name: "André N",
    review:
      "Lugar maravilhoso, os petiscos são inacreditáveis de tão gostosos.",
  },
  {
    name: "Nathalie H",
    review:
      "Ótimo lugar, comidas e bebidas boas e com preço justo. Atendimento excepcional",
  },
];

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="centralizar">
      <h3>Depoimentos</h3>

      <Swiper
        className="container-depoimento"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {dadosDepoimentos.map(({ name, review }, index) => {
          return (
            <SwiperSlide key={index} className="depoimento">
              <h1 className="client-name">{name}</h1>
              <p className="client-review">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <a
        href="https://www.google.com/search?hl=pt-BR&gl=br&q=Morada+%7C+Rango+e+Birita+-+R.+das+Figueiras,+2434+-+Campestre,+Santo+André+-+SP,+09080-301&ludocid=5849571027012357352&lsig=AB86z5WRqWGnAD448xJVCbf-I3zU#lrd=0x94ce43e3a91f38ab:0x512dd9db517d0ce8,1"
        target="_blank"
      >
        <Botao>Veja mais</Botao>
      </a>
    </section>
  );
};

export default Depoimentos;
