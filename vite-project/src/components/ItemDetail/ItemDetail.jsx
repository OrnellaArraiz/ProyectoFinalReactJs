import propTypes from "prop-types";
import React, { useContext, useState } from "react";
import styles from "./ItemDetail.module.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { toast } from 'react-toastify';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const handleAddToCart = () => {
    addItem(item, quantityToAdd);
    toast('Producto agregado al carrito', {
      position: "top-left",
      autoClose: 900,
      theme: "colored",
    });
  };

  if (!item) {
    return null;
  }

  return (
    <div className={styles['product-container']}>
      <h1 className={styles['product-name']}>{item.title}</h1>
      <div className={styles['info-container']}>
        <img src={`/img/${item.imageId}`} alt={item.title} className={styles['product-image']} />
        <p className={styles['product-detalle']}>{item.description}</p>
      </div>
      <div className={styles['btn-container']}>
      <button className={styles['boton-agregar']} onClick={handleAddToCart}>Agregar al carrito</button>
      <ItemCount
        initial={1}
        stock={item.stock}
        quantity={quantityToAdd}
        onChange={setQuantityToAdd}
      />
      <Link to="/">
        <button className={styles['btn-volver']}>Volver</button>
      </Link>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: propTypes.object,
};

export default ItemDetail;