import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading, addItem }) => {
    if (isLoading) {
        return <h2 className="text-center mt-3">Procesando...</h2>;
    }
    if (!item) {
        return <h2 className="text-center mt-3 text-danger">Producto no encontrado</h2>;
    }
    
    return (
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <p className="card-text">${item.price}</p>
            <p>Stock: {item.stock}</p>
            <img src={`/img/${item.imageId}`} alt={item.title} className="img-fluid mb-2" style={{ maxWidth: '500px', maxHeight: '500px' }}/>
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