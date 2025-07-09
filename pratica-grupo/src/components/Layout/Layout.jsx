import { Outlet } from "react-router";
import { Navbar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  
    return (
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    );
  };
  