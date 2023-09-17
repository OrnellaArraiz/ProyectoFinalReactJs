import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "./Services/utils";
import { createOrder } from "./Services/services";
import Field from "./Field/Field";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",});

  const total = getCartTotal(cart);

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
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  const isFormValid = name && phone && email;
  const onSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log(
        `Tu nombre ${name}, Tu teléfono ${phone}, y tu correo ${email}`
      );
    }
  };

  return (
    <div>
      <h2>Resumen de la compra</h2>
      {orderId && <p>Comprobante número: {orderId}</p>}
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
            <h4>Ingresa tus datos para continuar:</h4>
            <form className="form-control" onSubmit={onSubmit}>
              <Field label="Nombre:" name="name" onChange={onChange} />
              <Field label="Teléfono:" name="phone" onChange={onChange} />
              <Field label="Email:" name="email" onChange={onChange} />
              <button type="submit">Finalizar compra</button>
              {isLoading && <p>Aguarda un momento, estamos procesando tu compra...</p>}
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default Checkout;