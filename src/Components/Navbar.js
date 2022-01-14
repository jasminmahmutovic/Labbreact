import { Link } from "react-router-dom";
import "../Styles/Navbar.css"

const Navbar = () => {
    return (
            <div className="navbar">
            <h1>For the Star Wars fans</h1>
            <Link to="/">Home</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/About">About</Link>
        </div>
    );
};

export default Navbar;
