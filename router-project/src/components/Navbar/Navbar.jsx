import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <Link to="/">home</Link>
      <br />
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
        to="/contact"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        contatos
      </NavLink>
    </>
  );
};
