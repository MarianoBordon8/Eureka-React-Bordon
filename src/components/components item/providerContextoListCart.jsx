import { useState, useEffect } from "react";
import { createContext } from "react";
import {db} from "../services/firebase"
import {getDocs, collection} from "firebase/firestore"



export const listCartContext = createContext("none");

const ProviderContextoListCart = ( {children} ) => {
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "productos")
        getDocs(collectionRef)
                .then(res =>
                    setDetail(res.docs.map(product=>({
                        id: product.id,
                        ...product.data()
                    })))
                    )
                },[])

    const [listCart, setListCart] = useState([]);

    const agregarProducto = (id) => {
        const producAdd = detail.find(product => product.id === id)
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
        <listCartContext.Provider value={ {removeFromCart ,listCart ,agregarProducto, clearCart, detail, setDetail} }>
            {children}
        </listCartContext.Provider>
    );
}

export default ProviderContextoListCart