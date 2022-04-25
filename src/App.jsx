import Header from "./components/Header/Header";
import Apresentacao from "./components/Apresentacao/Apresentacao";
import Sobre from "./components/Sobre/Sobre";
import Cardapio from "./components/Cardapio/Cardapio";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Localizacao from "./components/Localizacao/Localizacao";
import Contato from "./components/Contato/Contato";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Apresentacao />
      <Sobre />
      <Cardapio />
      <Depoimentos />
      <Localizacao />
      <Contato />
    </>
  );
}

export default App;
