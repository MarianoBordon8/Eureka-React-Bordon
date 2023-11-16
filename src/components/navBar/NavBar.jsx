import Logo from "../header/Logo";
import CartWidget from "./CartWidget";
import ContextCart from "../header/ContextCart";
import { Link } from "react-router-dom"


const NavBar = () => {

    return (
        <ContextCart>
            <header>
                <div className="containerLogo">
                    <Logo />
                </div>
                <nav className="categorias">
                    <ul >
                        <li style={{ color: "white"}}>
                            <Link to="/">inicio</Link>
                        </li>
                        <li>
                            <Link to="category/setmatero">setmatero</Link>
                        </li>
                        <li>
                            <Link to="category/cartuchera">cartuchera</Link>
                        </li>
                        <li>
                            <Link to="category/infantil">infantil</Link>
                        </li>
                    </ul>
                </nav>
                <div className="containerCart">
                <Link to="compra"><CartWidget/></Link>
                </div>
            </header>
        </ContextCart>
    )
}

export default NavBar;