import { Link, Outlet } from "react-router";

export const Home = () => {
  
    return (
      <div>
        <h1>Home</h1>
        <div>
            <Link to="detalhes/10">Ir para a página do detalhe</Link>
            <Outlet />
            </div>
      </div>
    );
  };
  