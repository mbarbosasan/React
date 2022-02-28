import React from "react";

// const App = () => {
//   const random = Math.random();
//   const ativo = true;
//   const titulo = <h1> Esse é um titulo</h1>;

//   function mostrarNome() {
//     return 'Moises';
//   }

//   const estiloP = {
//     color: "blue",
//     fontSize: '2rem',
//   }
//   return (
//     // Pra não precisarmos ficar inserindo div e sujar o código podemos usar o React.fragment;

//     <React.Fragment>
//       {titulo}
//       <p style={estiloP}>{true ? 'verdadeiro' : 'falso'}{mostrarNome()}</p>
//       <p>{new Date().getFullYear()}</p>
//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome"></input>
//       <p className={ativo ? "ativo" : "inativo"}>{(random * 1000) / 50}</p>
//     </React.Fragment>
//   );
// };

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$", "")))
    .reduce((a, b) => a + b);

  return (
    <React.Fragment>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade} </p>
      <p>
        {" "}
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa == true ? "Ativo" : "Inativa"}{" "}
        </span>
      </p>
      <p>Total Gasto: {total}</p>
      <p>
        {total >= 10000 ? "Você está gastando muito" : "Você está economizando"}
      </p>
    </React.Fragment>
  );
};

export default App;
