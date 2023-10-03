import Image from "./Image";
import Description from "./Description";
import productos from "../../productos.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ButtonAddCart from "./ButtonAddCart";
import cart from "../../image/cart-white.svg"


const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {

        setDatos([])

        const idFiltrado = productos.filter(flt => flt.id === idItem);
        setDatos(idFiltrado)
    }, [idItem])

    return(
        <div className="detailsItem">
            {
                (datos.length === 0) ? "NADA"
                : datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image
                                imagen={items.imagen}
                            />
                        </div>
                        <div className="containerRigth">
                                <Description
                                    nombre= {items.nombre}
                                    parrafo= {items.description}
                                    cantidad = {items.stock}
                                    precio={items.precio}
                                />
                            <div className="buttons">
                                <ButtonAddCart
                                id={items.id}
                                svg={cart}
                                />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;