import React, { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from "../context/CartContext";


const CartWidget = () => {
    const { cart } = useContext(CartContext);
  
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {totalQuantity > 0 && <FaShoppingCart />}
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </div>
  );
};

export default CartWidget;