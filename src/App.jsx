import "./App.css";
import Header from "./components/header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import {Footer} from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
     <Footer/>
    </>
  );
}

export default App;
