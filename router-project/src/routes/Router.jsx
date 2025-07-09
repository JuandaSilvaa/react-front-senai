import { Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { Contact } from "../pages/Contact/Contact";
import { Product } from "../pages/Product/Product";
import { Settings } from "../components/Settings/Settings";
import { Deshboard } from "../pages/Deshboard/Deshboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/deshboard" element={<Deshboard />} >
        <Route index element={<Home/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Route>
      
      <Route path="/produto/:name" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
