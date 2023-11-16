import { useContext } from "react";
import cart from "../../image/cart.svg"
import { listCartContext } from "../components item/providerContextoListCart";

const CartWidget = () => {
    const { listCart } = useContext(listCartContext)

    return(
        <div className="containerLength">
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                {listCart.length}
            </span>
        </div>
    )
}

export default CartWidget;