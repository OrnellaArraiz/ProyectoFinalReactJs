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
};

export default ItemCount;

ItemCount.propTypes = {
  initial: propTypes.number,
  stock: propTypes.number,
  onAdd: propTypes.func,
};