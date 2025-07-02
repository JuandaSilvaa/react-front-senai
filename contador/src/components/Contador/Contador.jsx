import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(1);

  const adicionarContador = () => {
    setContador((prevState) => prevState + 1);
    setContador((prevState) => prevState + 1);
    setContador((prevState) => prevState + 1);
  };
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}
