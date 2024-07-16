import Header from "./components/Header/Header";
import Apresentacao from "./components/Apresentacao/Apresentacao";
import Sobre from "./components/Sobre/Sobre";
import Ifood from "./components/Ifood/Ifood";
// import Cardapio from "./components/Cardapio/Cardapio";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Localizacao from "./components/Localizacao/Localizacao";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Apresentacao />
      <Sobre />
      <Ifood />
      <Cardapio />
      <Depoimentos />
      <Localizacao />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
