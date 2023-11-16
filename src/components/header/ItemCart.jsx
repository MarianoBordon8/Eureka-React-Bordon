import deleteWhite from "../../image/deleteWhite.svg"
import { useContext, useEffect } from "react"
import { listCartContext } from "../components item/providerContextoListCart"
import Button from "../components item/Button"
import { useState } from "react";
import Counter from "../components item/counter";


const ItemCart = ( {id, nombre, imagen, precio, stock, actualizarTotal, eliminarDelTotal} ) => {

    const { removeFromCart } = useContext(listCartContext)
    const { listCart } = useContext(listCartContext)
    const item = listCart.find(product => product.id === id)

    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(precio);
    const [bandera, setBandera] = useState(true);
    const {valor , sumar, restar} = Counter(id)


    useEffect(() => {
        if (bandera) {
            actualizarTotal(item.precio, 'sumar')
            setBandera(false);
        }
    }, [bandera]);

    item.quantity = valor

    const handleEliminar = () => {
        eliminarDelTotal(item.id);
    };


    const operacionesSumar = ()=>{
        sumar()
        if(valor < item.stock){
            setCount(valor + 1);
            setTotal(total+item.precio)
            const subtotal = item.precio
            actualizarTotal(subtotal, 'sumar');
        }
    }

    const operacionesRestar = ()=>{
        restar()
        if(valor > 1){
            setCount(valor - 1);
            setTotal(total-item.precio)
            const subtotal = item.precio
            actualizarTotal(subtotal, 'restar')
        }
    }

    return (
        <div className="itemCart">
            <div className="img">
                <img src={imagen}></img>
            </div>
            <div className="description-cantidad">
                <span className="nombre">{nombre}</span>
                <span className="Stock">stock: {stock}</span>
                <div className="div-contador">
                    <Button clase={"contador"} onClick={operacionesRestar}>-</Button>
                    <p>{valor}</p>
                    <Button clase={"contador"} onClick={operacionesSumar}>+</Button>
                </div>
            </div>
            <div className="precio">
                <span className="subtotal">Precio unitario</span>
                <span className="precio">${precio}</span>
            </div>
            <div className="precio2">
                <span className="subtotal">Subtotal</span>
                <span className="precio">${precio * valor}</span>
            </div>
            <button className="eliminar" onClick={ () => removeFromCart(id) }>
                <img src={deleteWhite} onClick={handleEliminar}></img>
            </button>
        </div>
    )
}

export default ItemCart