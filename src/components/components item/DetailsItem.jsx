import Image from "./Image";
import Description from "./Description";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ButtonAddCart from "./ButtonAddCart";
import cart from "../../image/cart-white.svg"
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";


const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        setDatos([])
        const docRef = doc(db, "productos", idItem)

        getDoc(docRef)
            .then((response) => {
                if(response.exists()){
                    setDatos({id: response.id, ...response.data()})
                }else{
                    console.log("NO EXISTE")
                }
            })
            .catch(error => {
                console.log(error)
            })
    },[idItem])

    return(
        <div className="detailsItem">
            <div className="containerLeft">
                <Image
                    imagen={datos.imagen}
                />
            </div>
            <div className="containerRigth">
                    <Description
                        nombre= {datos.nombre}
                        parrafo= {datos.description}
                        cantidad = {datos.stock}
                        precio={datos.precio}
                    />
                <div className="buttons">
                    <ButtonAddCart
                    id={datos.id}
                    svg={cart}
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailsItem;