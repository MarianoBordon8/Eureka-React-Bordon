import close from "../../image/close.svg";
import ItemCart from "./ItemCart";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "../components item/providerContextoListCart";

const ContainerCart = () => {

    const { cartShow, setCartShow} = useContext(controllerShowCart);
    const {listCart} = useContext(listCartContext);

    const style = {
        display: cartShow
    }

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(

            <div className="cart" style={style} >
                <div className="cerrar">
                    <button className="imagen-cerrar" onClick={closeCart}>
                        <img src={close}></img>
                    </button>
                </div>

                <div className="containerItemsCart">
                    {
                        (listCart.length === 0 ) ? <span className="vacio">Tu carrito esta vacio, ¡llenalo!</span>
                        : listCart.map(producto => (
                            <ItemCart
                                key={producto.id}
                                id={producto.id}
                                nombre={producto.nombre}
                                imagen={producto.imagen}
                                quantity={producto.quantity}
                                precio={producto.precio}
                            />
                        ))
                    }
                </div>
            </div>

    )
}

export default ContainerCart