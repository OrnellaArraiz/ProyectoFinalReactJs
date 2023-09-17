import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Checkout from "./components/checkout";
import './index.css';

function App() {
  return (
    
    <CartProvider>
      <NavBar/>

        <Routes>
          {/* Por producto */}
          <Route path="/" element={<ItemListContainer />} />

          {/* Por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>     
    </CartProvider>
  );
}

export default App
