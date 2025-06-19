import "../Apresentacao/apresentacao.css";
import LogoApresentacao from "../../assets/images/logo-apresentacao.png";
import Sanduiche from "../../assets/images/sanduiche.png";


import "swiper/css";
import "swiper/css/pagination";


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
