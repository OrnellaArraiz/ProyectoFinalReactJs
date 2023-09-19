import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import ProductCart from '../ProductCart/ProductCart'; 
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'; 
import styles from './ItemList.module.css';

const ItemList = React.memo(({ items }) => {
  const renderedItems = useMemo(() => {
    return items.map((item) => (
      <li key={item.id}>
        <ProductCart item={item} />
        <ItemDetailContainer item={item} /> 
      </li>
    ));
  }, [items]);

  const productList = (
    <React.Fragment>
      <h2 className={styles['titulo-home']}>Nuestros productos: </h2>      
      <ul>
        <div className={styles['grid-container']}>
          {renderedItems}
        </div>
      </ul>
    </React.Fragment>
  );

  return (
    <div>
      {productList}
    </div>
  );
});

ItemList.propTypes = {
  items: propTypes.array.isRequired,
};

export default ItemList;