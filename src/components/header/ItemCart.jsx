import deleteWhite from "../../image/deleteWhite.svg"
import { useContext } from "react"
import { listCartContext } from "../components item/providerContextoListCart"
import Button from "../components item/Button"
import { useState } from "react";
import productos from "../../productos.json";


const ItemCart = ( {id, nombre, imagen, precio, quantity} ) => {

    const { removeFromCart } = useContext(listCartContext)

    const [count, setCount] = useState(1);

    const incrementar = () => {
        if (count < productos[id].stock){
        setCount(count + 1);
        }
    };

    const decrementar = () => {
        if (count > 1){
            setCount(count - 1);
        }
    };
    quantity = count


    return (
        <div className="itemCart">
            <div className="img">
                <img src={imagen}></img>
            </div>
            <div className="description-cantidad">
                <span className="nombre">{nombre}</span>
                <div className="div-contador">
                    <Button clase={"contador"} onClick={decrementar}>-</Button>
                    <p>{count}</p>
                    <Button clase={"contador"} onClick={incrementar}>+</Button>
                </div>
            </div>
            <div className="precio">
                <span className="subtotal">Subtotal</span>
                <span className="precio">${precio * quantity}</span>
            </div>
            <button className="eliminar" onClick={ () => removeFromCart(id) }>
                <img src={deleteWhite}></img>
            </button>
        </div>
    )
}

export default ItemCart