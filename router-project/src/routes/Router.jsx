import { Route, Routes } from "react-router"
import { Home } from "../pages/Home/Home"
import { NotFound } from "../pages/NotFound/NotFound"
import { Contact } from "../pages/Contact/Contact"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}