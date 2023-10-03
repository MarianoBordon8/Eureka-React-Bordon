import { useContext } from "react";
import { listCartContext } from "./providerContextoListCart";

const ButtonAddCart = ( {id, svg} ) => {
    
    let {agregarProducto } = useContext(listCartContext)

    const handlerClick = () => {
        agregarProducto(id)
    }
    
    return(
        <button id="addCart" onClick={handlerClick}>
            <img src={svg} alt="add"></img>
        </button>
    )
}

export default ButtonAddCart;