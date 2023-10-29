import eureka from "../../image/eureka-modified.png";
import { Link } from "react-router-dom"

const Logo = () => {
    return(
        <Link to="/">
            <img id="logo" src={eureka} alt=""></img>
        </Link>
    )
}

export default Logo;