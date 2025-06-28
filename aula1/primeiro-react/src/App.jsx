import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { OlaNome } from "./components/OlaNome/OlaNome";
import { Capslock } from "./components/Capslock/Capslock";
import { Cards } from "./components/Cards/Cards";

function App() {
  return (
    <>
      <OlaNome name="Juan" />
      
      <main style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
      <Capslock>me deixa em capslock</Capslock>
        <Cards
          titulo="teste"
          descricao="teste"
          url="https://veja.abril.com.br/wp-content/uploads/2016/05/alx_nike1_original.jpeg?quality=70&strip=all&resize=360"
        />
        <Cards
          titulo="teste"
          descricao="teste"
          url="https://veja.abril.com.br/wp-content/uploads/2016/05/alx_nike1_original.jpeg?quality=70&strip=all&resize=360"
        />
        <Cards
          titulo="teste"
          descricao="teste"
          url="https://veja.abril.com.br/wp-content/uploads/2016/05/alx_nike1_original.jpeg?quality=70&strip=all&resize=360"
        />
      </main>
    </>
  );
}

export default App;
