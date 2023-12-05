import "./App.scss";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Card />
      </Container>
    </>
  );
}

export default App;
