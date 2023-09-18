import propTypes from "prop-types";
import { useContext, useState } from "react";
import "./ItemList.css";
import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ item, isLoading }) => {
  
    if (isLoading) {
      return <h2>Procesando...</h2>;
    }
  
    if (!item) {
      return <h2>Producto no encontrado</h2>;
    }
    
const [quantityAdded, setQuantityAdded] = useState(0);
const [newStock, setNewStock] = useState(item.stock);
const { addItem } = useContext(CartContext);

const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(item, quantity);
    setNewStock(newStock - quantity);
  };
 
  return (
    <div className="d-flex container col-8 pt-5">
      <img src={`/${item.categoryId}/${item.imageId}`} alt={item.title} />
      <div className="card-body d-flex flex-column justify-content-around text-center align-items-center">
        <h1 className="card-title">{item.title}</h1>
        <p className="card-text fw-bold">Descripcion de {item.title}</p>
        {newStock < 5 ? (
          <p className="card-text">Apurate quedan {newStock} disponibles!</p>
        ) : (
          <p className="card-text">Quedan {newStock} disponibles</p>
        )}
        <p className="card-text text-danger fw-bold fs-1">${item.price}</p>
        {quantityAdded > 0 ? (
          <>
            <Link to="/cart" className="btn btn-warning">
              Terminar Compra
            </Link>
            <Link to="/" className="btn btn-warning">
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount initial={1} stock={newStock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
};

export default ItemDetail;