import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import styles from './Cart.module.css';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    const isEmpty = cart.length === 0;

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };
  
    return (
        <div>
            <h2 className={styles['h2-cart']}>Carrito de compras</h2>
            {isEmpty ? (
                <div>
                    <p className={styles['empty-cart-p']}>¡Oh no! Tu carrito de compras está vacio</p>
                    <Link to="/"><button className={styles['empty-cart-btn']}> Ver productos  </button></Link>
                </div>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className={styles['li-cart']}>
                                <div>
                                    <img className={styles['img-cart']} src={`/img/${item.imageId}`} alt={item.title} />
                                </div>
                                <div>
                                    <h3 className={styles['name-cart']}>{item.title}</h3>
                                </div>
                                <div className={styles['info-cart']}>
                                    <p className={styles['price-cart']}>Precio: ${item.price}</p>
                                    <p className={styles['cant-cart']}>Cantidad: {item.quantity}</p>
                                    <FaTrash className={styles['delete-icon']} onClick={() => removeItem(item.id)} />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <div className={styles['cart-total']}>
                            <p>Total: ${calculateTotal()}</p>
                        </div>
                        <button className={styles['vaciar-cart']} onClick={() => clearCart()}>Vaciar carrito</button>
                        <Link to="/checkout">
                            <button className={styles['comprar-cart']}>Realizar compra</button>
                        </Link>
                        <Link to="/"><button className={styles['ver-mas-cart']}> Ver mas productos  </button></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
