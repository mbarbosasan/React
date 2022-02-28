import Form from "./Form/Form";
import Header from './Header'
import Home from './Home'
import Produtos from "./Produtos";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

function App() {
  // return (
  //   <div className="App">
  //     <Titulo cor="red" texto='Meu titulo 1'>
  //       <p>Isso é o children</p>
  //     </Titulo>
  //     <Titulo cor="blue" texto='Meu titulo 2' />

  //   </div>
  // );
  // return (
  //   <Form />
  // )

  // Replique a interface como a apresentada na aula
  // Utilize a array abaixo para mostrar os produtos
  // Quebre em componentes o que precisar ser reutilizado
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)
  
  let Pagina = Home;
  const {pathname} = window.location;
  
  if (pathname === '/produtos') {
    Pagina = Produtos
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )
}

export default App;
