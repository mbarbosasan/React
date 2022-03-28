import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
import Produto from "./Produto";

const App = () => {
  //Também podemos usar o estado do componente através de fatores externos como por exemplo uma função dentro do useState que verifique se o usuário está com um modal ativo através de uma informação no LocalStorage.
  // const [modal, setModal] = React.useState(false);
  // let [items, setItems] = React.useState("Teste");

  // function handleClick() {
  //Conseguimos atualizar os itens dentro dos estados normalmente atribuindo novos valores mais isso não irá ativar o gatilho para renderização do componente, caso seja preciso alterar precisamos fazer isso através do método de Set.
  // items = 'Outro'; (X)
  // setItems("Outro");
  // }
  // DESAFIO:
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    )
    const json = await response.json();
    setDados(json)
    setCarregando(false);
  }

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados}/>} 
    </div>
  );
};

export default App;
