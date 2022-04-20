import Header from "./components/Header/Header";
import Apresentacao from "./components/Apresentacao/Apresentacao";
import Sobre from "./components/Sobre/Sobre";
import Cardapio from "./components/Cardapio/Cardapio";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Apresentacao />
      <Sobre />
      <Cardapio />
      <Depoimentos />
    </>
  );
}

export default App;
