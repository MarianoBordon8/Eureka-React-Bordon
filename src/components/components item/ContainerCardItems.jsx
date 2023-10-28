import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore"
import {db} from "../services/firebase"



const ContainerCardItems = () => {

    const [detail, setDetail] = useState([]);
    let {categoria} = useParams()


    useEffect(() => {
        let collectionRef = null
        if (categoria === undefined){
            collectionRef = collection(db, "productos")
        } else{
            collectionRef = query(collection(db, "productos"), where("categoria", "==", categoria))
        }


        getDocs(collectionRef)
            .then(Response => {
                const productosNuevos = Response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setDetail(productosNuevos)
            })
            .catch(error => {
                console.log(error)
            })
    },[categoria])

    if (!detail) return <>Cargando...</>;

    return(
        <div className="containerCardItems">
            {
                (detail.length === 0 ) ? <div className="containerSpinner"> ... </div>
                : detail.map( product => (
                    <CardItem
                        key={product.id}
                        id={product.id}
                        imagen={product.imagen}
                        nombre={product.nombre}
                        cantidad={product.stock}
                        precio={product.precio}
                    />
                ))
            }
        </div>
    )
}

export default ContainerCardItems;