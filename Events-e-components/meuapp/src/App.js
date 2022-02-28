import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";

function App() {
  // EVENTOS

  // function handleClick(event) {
  //   console.log(event)
  // }

  // https://pt-br.reactjs.org/docs/events.html

  // return (
  //   <button onClick={handleClick} onMouseMove={(event) => console.log(event)}>Clique</button>
  // );

  //COMPONENTES

  const Teste = () => {
    const active = false;
    if (active) {
      return <p>Teste</p>
    } else {
      return null;
    }
  }

  return (
    <div>
      <Teste />
      <Header />
      <p>Meu app</p>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
