import Logo from "../header/Logo";
import CartWidget from "./CartWidget";
import ContainerCart from "../header/ContainerCart";
import ContextCart from "../header/ContextCart";
import ItemListContainer from "../itemsListContainer/ItemsListContainer";


const NavBar = () => {

    return (
        <ContextCart>
            <header>
                <div className="containerLogo">
                    <Logo />
                </div>
                <nav className="categorias">
                    <ItemListContainer
                        uno = "inicio"
                        dos = "setmatero"
                        tres = "cartuchera"
                        cuatro = "infantil"
                    />
                </nav>
                <div className="containerCart">
                    <CartWidget />
                </div>
                <ContainerCart />
            </header>
        </ContextCart>
    )
}

export default NavBar;