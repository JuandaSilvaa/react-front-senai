import { Link, useLocation } from "react-router"
import { Navbar } from "../../components/Navbar/Navbar"

export const Home = () => {
    const location = useLocation();
    const formValues = location.state || {}
    console.log(formValues, "<--- valores recebidos por location")

    return(
        <>
            <h1>Home</h1>
            <p>Name: {formValues ? formValues.name : ""}</p>
            <p>Name: {formValues ? formValues.message : ""}</p>
            <div>
                <Link to="produto/roteador-cisco">Ir para a página do produto Roteador</Link>
            </div>
            <div>
                <Navbar/>
            </div>
        </>
    )
}