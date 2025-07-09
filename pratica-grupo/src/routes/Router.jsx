import { Route, Routes } from "react-router";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Detalhes } from "../pages/Detalhes/Detalhes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detalhes/:id" element={<Detalhes />} />
        <Route path="/detalhes" element={<Detalhes />} />
      </Route>
    </Routes>
  );
};
