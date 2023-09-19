import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Services/services";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId).then((filteredProducts) => {
      setItems(filteredProducts);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <span className={styles['loader']}></span>;
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;