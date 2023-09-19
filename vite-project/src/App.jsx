import { Routes, Route } from "react-router-dom";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/context/CartContext";
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemlistContainer />} />
          <Route path="/category/:categoryId" element={<ItemlistContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </CartProvider>
    </div>
  );
}

export default App;