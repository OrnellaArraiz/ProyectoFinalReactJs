import PropTypes from "prop-types";
import { useContext } from "react";
import "./ItemList.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "../../context/CartContext";

const ItemDetail = ({ item, isLoading }) => {
    const { addItem } = useContext(CartContext); 
  
    if (isLoading) {
      return <h2>Procesando...</h2>;
    }
  
    if (!item) {
      return <h2>Producto no encontrado</h2>;
    }
    
    return (
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <div>
                <img src={`/img/${item.imageId}`} alt={item.title} className="img-fluid mb-2" style={{ maxWidth: '500px', maxHeight: '500px' }}/>
            </div>
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            
            <p className="card-text">${item.price}</p>
            <p>Stock: {item.stock}</p>
            <p className="card-text">{item.categoryId}</p>
            <button onClick={() => addItem(item, 1)}>Agregar al carrito</button>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
};

export default ItemDetail;