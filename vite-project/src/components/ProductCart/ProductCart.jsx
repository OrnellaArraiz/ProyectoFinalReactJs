import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import styles from './ProductCart.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { toast } from 'react-toastify';

const ProductCart = React.memo(({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const handleAddToCart = () => {
    addItem(item, quantityToAdd);
    toast('Agregado al carrito con éxito', {
      position: "top-left",
      autoClose: 1200,
      theme: "light",
      });
  };


  return (
    <div className={styles['product-cart']}>
      <img src={`/img/${item.imageId}`} alt={item.title} className={styles['product-image']} />
      <Link to={`/item/${item.id}`}>
        <h3 className={styles['product-name']}>{item.title}</h3>
      </Link>
      <p className={styles['product-price']}>${item.price}</p>
      <ItemCount
        initial={1}
        stock={item.stock}
        quantity={quantityToAdd}
        onChange={setQuantityToAdd}
      />

      <button className={styles['btn-add']} onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
});

export default ProductCart;