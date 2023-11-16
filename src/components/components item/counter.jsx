import { useState } from "react"
import { useContext} from "react"
import { listCartContext } from "./providerContextoListCart"


const Counter = (id) => {

    const { listCart } = useContext(listCartContext)
    const item = listCart.find(product => product.id === id)

    const [valor ,setValor] = useState(1)

    const sumar = () => {
        if (valor < item.stock){
        setValor(valor + 1)
        }
    }
    const restar = () => {
        if (valor > 1){
        setValor(valor - 1)
        }
    }
    return {valor, sumar, restar}
}

export default Counter