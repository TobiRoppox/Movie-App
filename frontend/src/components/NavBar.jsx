import { Link } from "react-router-dom";
import "../css/NavBar.css";
import logo from "../assets/logo.png"; // Import your logo

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={logo} alt="Movie App Logo" className="navbar-logo" />
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    );
}

export default NavBar;
