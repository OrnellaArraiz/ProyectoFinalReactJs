import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "./Services/services";
import Field from "./Field/Field";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clearCart } = useContext(CartContext);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",});

    const cartOrder = (cart) => {
        return cart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          price: item.price,
          title: item.title,
        }));
      };
    
      const updateStock = (cart) => {
        const db = getFirestore();
        cart.forEach((item) => {
          const stockDoc = doc(db, "items", item.id);
          updateDoc(stockDoc, { stock: item.stock - item.quantity });
        });
      };
    
      const { name, phone, email } = formState;
      const onChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };
    
      const handleCheckout = () => {
        const order = {
          buyer: {
            name: formState.name,
            phone: formState.phone,
            email: formState.email,
          },
          items: cartOrder(cart),
          total,
          date: serverTimestamp(),
        };
        createOrder(order).then((docRef) => {
          setOrderId(docRef.id);
          updateStock(cart);
          clearCart();
        });
      };
    
      const isFormValid = name && phone && email;
      const onSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
          console.log(
            `Your name is ${name}, your phone is ${phone}, and your email is ${email}`
          );
        }
      };
    
      return (
        <div className="container">
          <h1>Checkout</h1>
          <h2>Resumen de la compra</h2>
          {orderId && <p>El id de la order es: {orderId}</p>}
          {!orderId && (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <p>{item.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: {item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                  </li>
                ))}
              </ul>
              <p>Total de la compra: ${total}</p>
              <div>
                <h4>Ingresa tus datos para completar la compra.</h4>
                <form className="form-control" onSubmit={onSubmit}>
                  <Field label="Nombre:" name="name" onChange={onChange} />
                  <Field label="Telefono:" name="phone" onChange={onChange} />
                  <Field label="Email:" name="email" onChange={onChange} />
                  <button
                    disabled={!isFormValid}
                    type="submit"
                    onClick={handleCheckout}
                  >
                    Finalizar compra
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      );
    };
    export default Checkout;