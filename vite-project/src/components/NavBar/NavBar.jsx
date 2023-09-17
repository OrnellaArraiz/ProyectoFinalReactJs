import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";

const Navbar = () => {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="navbar-brand"> 
            <Link to="/" className="text-decoration-none">La Relojería</Link>
          </h1>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/category/watches">Relojes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/category/smartwatches">Smartwatch</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/category/accessories">Accesorios</NavLink>
                </li>
            </ul>
          </div>
          <div className="cart-widget">
            <NavLink to="/cart"><CartWidget></CartWidget></NavLink>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;