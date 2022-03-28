import React from "react";
import Produto from "./Produto";

const App = () => {

  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  )

  // const [contar, setContar] = React.useState(0);
  // const [dados, setDados] = React.useState(null);

  // React.useEffect(() => {
  //   // se o fetch estivesse fora do useEffect, toda vez que o componente
  //   // fosse atualizado, o mesmo seria executado
  //   fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
  //     .then((response) => response.json())
  //     .then((json) => setDados(json));
  // }, []);

  // return (
  //   <div>
  //     {dados && (
  //       <div>
  //         <h1>{dados.nome}</h1>
  //         <p>{dados.preco * contar}</p>
  //       </div>
  //     )}
  //     <button onClick={() => setContar(contar + 1)}>{contar}</button>
  //   </div>
  // );

};

export default App;
