import { useParams } from "react-router";

export const Product = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>O nome do produto é: {name} </h1>
    </div>
  );
};
