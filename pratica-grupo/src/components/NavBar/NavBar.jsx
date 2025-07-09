import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        Home navLink
      </NavLink>
      <br />
      <NavLink
        to="/detalhes"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        Detalhes
      </NavLink>
    </>
  );
};
