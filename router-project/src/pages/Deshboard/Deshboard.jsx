import { Link, Outlet } from "react-router"

export const Deshboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/deshboard/settings">Configurações</Link>
            <Outlet />
        </div>
    )
}