import React from 'react'

function App() {
  // const produtos = ["Notebook", "Tablet", "Smartphone"];

  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  // return (
  // <ul className="App">
  //   {produtos.map((produto) => (
  //     <li key={produto}>{produto}</li>
  //   ))}
  // </ul>

  // return (
  //   <ul>
  //     {livros
  //       .filter(({ ano }) => ano >= 1998)
  //       .map(({ nome, ano }) => {
  //         return (
  //           <li key={nome}>
  //             {nome}, {ano}
  //           </li>
  //         );
  //       })}
  //   </ul>
  // );

  // Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500

  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];
  
    return (
  <React.Fragment>
    {console.log(produtos)}
    {produtos.filter(({preco}) => Number(preco.replace('R$ ', '') > 1500)).map(({id, nome, preco, cores}) => {
      return <section key={id}>
        <h1>{nome}</h1>
        <p>Preço: {preco}</p>
        {cores.map((cor) => {
          return <li key={cor} style={{backgroundColor: cor, color: 'white'}}>{cor}</li>
        })}
      </section>
    })}
  </React.Fragment>
  )
}

export default App;
