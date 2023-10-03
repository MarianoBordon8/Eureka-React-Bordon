import Image from "./Image";
import Description from "./Description";
import ButttonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";
import cart from "../../image/cart-white.svg"
import ButtonDetalles from "./ButtonDetalles";


const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image
                imagen={props.imagen}
                />
            <Description
                nombre= {props.nombre}
                cantidad = {props.cantidad}
                precio={props.precio}
                />
            <div className="buttons">
                <Link to={ `/item/${props.id}`}>
                    <ButtonDetalles
                    txt="Ver detalles"
                    />
                </Link>
                <ButttonAddCart
                    id={props.id}
                    svg={cart}
                />
            </div>
        </div>
    )
}

export default CardItem;