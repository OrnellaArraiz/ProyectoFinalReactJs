import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/checkout";
import './index.css';

function App() {
  return (
    <>
      <CartProvider>

        <NavBar/>

          <Routes>
            <Route path="/cart" element={ <Cart /> }/>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            
          </Routes> 

      </CartProvider>
    </>
  );
}

export default App
