import { useParams } from "react-router";

export const Detalhes = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>Detalhes</h1>
        <p>id: {id}</p>
      </div>
    );
  };
  