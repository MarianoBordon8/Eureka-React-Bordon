import { useState } from "react";
import { createContext } from "react";
import productos from "../../productos.json";


export const listCartContext = createContext("none");

const ProviderContextoListCart = ( {children} ) => {

    const [listCart, setListCart] = useState([]);

    const agregarProducto = (id) => {
        const producAdd = productos.find(product => product.id === id)
        const productsToMaintain = listCart.filter(product => product.id !== id)
        setListCart( [...productsToMaintain, {...producAdd, quantity: 1}] )
    }

    const clearCart = () => {
        setListCart([]);
    }

    const removeFromCart = (id) => {
        const updateList = listCart.filter(product => product.id !== id)
        setListCart(updateList);
    }

    return (
        <listCartContext.Provider value={ {removeFromCart ,listCart ,agregarProducto, clearCart} }>
            {children}
        </listCartContext.Provider>
    );
}

export default ProviderContextoListCart