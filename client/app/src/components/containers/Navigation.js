import { Link } from "react-router-dom";

function Navigation(){
    return (
        <nav className="navMenu">
            <Link to="">Home</Link>
            <Link to="play">Play</Link>
            <Link className="loginButton" to="login">Login</Link>
        </nav>
    )
}


export default Navigation;