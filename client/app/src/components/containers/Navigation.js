import { Link } from "react-router-dom";

function Navigation(){
    return (
        <nav>
            <Link to="">Home</Link>
            <Link to="play">Play</Link>
            <Link to="login">Login</Link>
        </nav>
    )
}


export default Navigation;