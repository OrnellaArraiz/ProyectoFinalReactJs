import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../Services/services";
import ItemDetail from "./ItemDetail";
import "./ItemList.css";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    /* Por ID del item */
    useEffect(() => {
        getProduct(id)
        .then((response) => {
            setItem(response);
        })
        
        .catch(() => {
            setItem(null);
        })
        
        .finally(() => {
            setIsLoading(false);
        });
    }, [id]);
    
    return <ItemDetail item={item} isLoading={isLoading} addItem={addItem} />;
};

export default ItemDetailContainer;