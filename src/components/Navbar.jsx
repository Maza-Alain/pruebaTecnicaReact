import { Link } from "react-router-dom";
import "../index.scss"
const Navbar = () => {
    return ( 
    <nav>
        <ul>
            <Link className="link" to="/">Pregunta 6</Link>
            <Link className="link" to="/9">Pregunta 9</Link>
            <Link className="link" to="/10">Pregunta 10</Link>
            <Link className="link" to="/teoricas">Teóricas</Link>
        </ul>
    </nav> );
}
 
export default Navbar;