import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="/">
                    {props.uno}
                </Link>
            </li>

            <li>
                <Link to="category/setmatero">
                    {props.dos}
                </Link>
            </li>

            <li>
                <Link to="category/cartuchera">
                    {props.tres}
                </Link>
            </li>

            <li>
                <Link to="category/infantil">
                    {props.cuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

