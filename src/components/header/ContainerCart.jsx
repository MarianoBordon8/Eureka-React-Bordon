import close from "../../image/close.svg";
import ItemCart from "./ItemCart";
import { useContext, useState} from "react";
import { listCartContext } from "../components item/providerContextoListCart";
import Button from "../components item/Button";
import Compra from "../components item/Compra";

const ContainerCart = () => {

    const {listCart, clearCart} = useContext(listCartContext);

    const [total, setTotal] = useState(0)


    const actualizarTotal = (nuevoSubtotal, direccion) => {
        setTotal((prevTotal) => {
            if (direccion === 'sumar') {
                return prevTotal + nuevoSubtotal;
            } else if (direccion === 'restar') {
                return prevTotal - nuevoSubtotal;
            }
            return prevTotal;
        });
    };

    const handlerClick = () => {
        clearCart()
        setTotal(0)
    }

    const eliminarDelTotal = (id)=>{
        const item = listCart.find(product => product.id === id)
        const eliminar = item.precio * item.quantity
        setTotal(total - eliminar)
    }



    return(

            <div className="cart">

                <div className="containerItemsCart">
                    {
                        (listCart.length === 0 ) ? <h2 className="vacio">Tu carrito esta vacio</h2>
                        :
                        (
                            <div>
                                {listCart.map(producto => (
                                    <ItemCart
                                        actualizarTotal={actualizarTotal}
                                        eliminarDelTotal={eliminarDelTotal}
                                        key={producto.id}
                                        id={producto.id}
                                        nombre={producto.nombre}
                                        quantity={producto.quantity}
                                        imagen={producto.imagen}
                                        precio={producto.precio}
                                        stock={producto.stock}
                                    />
                                    ))}
                                    <h2>Total a Pagar: ${total}</h2>
                            </div>
                        )
                    }
                </div>
                {
                        (listCart.length !== 0 ) ?
                        <div className="botonesCarrito">
                            <Compra
                            total={total}
                            />
                            <Button className={"limpiarCarrito"} onClick={handlerClick}>Vaciar Carrito</Button></div>
                        : null
                    }
            </div>
    )
}

export default ContainerCart