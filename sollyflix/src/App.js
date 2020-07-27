import React from "react";
import Menu from "./components/Menu";
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "In today's Photoshop tutorial we're going back to the 1980s to create a rad text effect based on those 80s style chrome logos we used to see for games, movies, TV shows and more."
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default App;
