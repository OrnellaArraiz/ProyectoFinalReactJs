import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../Services/services";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    /* Por ID del item */
    useEffect(() => {
        getProduct(id)
        .then((response) => {
            setItem(response);
        })
        
        .catch(() => {
            setItem(null);
        });
    }, [id]);
    
    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;