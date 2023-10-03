const Description = (props) => {
    return(
        <div className="cardDescription">
            <h3 className="nombre">
                {props.nombre}
            </h3>
            <div className="description">
                <span className="descriptionTitle">Descripcion:</span>
                <p className="parrafo">
                    {props.parrafo}
                </p>
            </div>
            <span className="cant">
                Stock: {props.cantidad}
            </span>
            <span className="precio">
                ${props.precio}
            </span>
        </div>
    )
}

export default Description;