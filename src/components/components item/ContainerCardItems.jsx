import producto from "../../productos.json";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";



const ContainerCardItems = () => {
    const [detail, setDetail] = useState([]);
    let {categoria} = useParams()


    useEffect(() => {
        if(categoria === undefined){
            setDetail(producto)
        }else{
        setDetail([]);
        const productosCategorizado = producto.filter(producto => producto.categoria === categoria);
        setDetail(productosCategorizado);}
    }, [categoria]);

    if (!detail) return <>Cargando...</>;

    return(
        <div className="containerCardItems">
            {
                (detail.length === 0 ) ? <div className="containerSpinner">  </div>
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