import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartItem = (item) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="container cart-card d-flex col-12 justify-content-evenly form-control">
      <img
        src={`/${item.categoryId}/${item.imageId}`}
        alt={item.title}
        className="cart-img img-fluid"
      />
      <h3 className="card-title text-center">{item.title}</h3>
      <p className="card-text">${item.price}</p>
      <p className="card-text">x {item.quantity}</p>
      <button
        onClick={() => removeItem(item.id)}
        className="btn btn-danger cart-remove"
      >
        x
      </button>
    </div>
  );
};

export default CartItem;