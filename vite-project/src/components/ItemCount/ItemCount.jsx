import { useState } from "react";
import propTypes from "prop-types";

const ItemCount = ({ initial, onAdd, stock }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
  };

  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <button className="btn btn-warning" onClick={decrement}>
          -
        </button>
        <h4 className="number">{quantity}</h4>
        <button className="btn btn-warning" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

ItemCount.propTypes = {
  initial: propTypes.number,
  stock: propTypes.number,
  onAdd: propTypes.func,
};