import { createContext, useState } from "react";

export const controllerShowCart = createContext();

const ContextCart = ({children}) => {


    return(
        <controllerShowCart.Provider >
            {children}
        </controllerShowCart.Provider>
    )
}

export default ContextCart;
