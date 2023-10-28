import deleteWhite from "../../image/deleteWhite.svg"
import { useContext, useEffect } from "react"
import { listCartContext } from "../components item/providerContextoListCart"
import Button from "../components item/Button"
import { useState } from "react";


const ItemCart = ( {id, nombre, quantity, imagen, precio, actualizarTotal, eliminarDelTotal} ) => {

    const { removeFromCart } = useContext(listCartContext)
    const { listCart } = useContext(listCartContext)
    const item = listCart.find(product => product.id === id)

    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(precio);
    const [bandera, setBandera] = useState(true);

    useEffect(() => {
        if (bandera) {
            actualizarTotal(item.precio, 'sumar')
            setBandera(false);
        }
    }, [bandera]);


    const incrementar = () => {
        if (count < item.stock){
        setCount(count + 1);
        setTotal(total+item.precio)
        const subtotal = item.precio
        actualizarTotal(subtotal, 'sumar');
        }
    };

    const decrementar = () => {
        if (count > 1){
            setCount(count - 1);
            setTotal(total-item.precio)
            const subtotal = item.precio
            actualizarTotal(subtotal, 'restar');
        }
    };

    item.quantity = count

    const handleEliminar = () => {
        eliminarDelTotal(item.id);
      };


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
                <span className="precio">${precio * count}</span>
            </div>
            <button className="eliminar" onClick={ () => removeFromCart(id) }>
                <img src={deleteWhite} onClick={handleEliminar}></img>
            </button>
        </div>
    )
}

export default ItemCart