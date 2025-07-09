import { Route, Routes } from "react-router";
import App from "../App";
import { Layout } from "../components/Layout/Layout";
import { useCallback, useState } from "react";

export const Router = () => {
    const [search, setSearch] = useState("");
    const onSearch = useCallback((searchValue) => {
        setSearch(searchValue);
      });
      const onClear = useCallback(() => {
        setSearch("");
      });
  return (
    <Routes>
      <Route element={<Layout onClear={onClear} onSearch={onSearch}/>}>
        <Route path="/wishlist" element={<App search={search} />} />
      </Route>
    </Routes>
  );
};
