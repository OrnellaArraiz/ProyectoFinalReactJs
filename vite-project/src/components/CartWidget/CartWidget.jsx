import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../Services/utils";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
  
    const quantity = getCartQuantity(cart);
  
    return (
        <div className="container">
          <div className="d-flex justify-content-end align-items-center">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart3"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {quantity > 0 ? quantity : ""}
                  <span className="visually-hidden">Productos en carrito</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      );
    };
    
    export default CartWidget;