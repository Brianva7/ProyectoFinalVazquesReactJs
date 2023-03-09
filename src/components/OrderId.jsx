import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const OrderId = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };
  const order = {
    name,
    surname,
    email,
    phone,
    adress,
    city,
  };

  const ordersCollection = collection(db, "order");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adress"
          onChange={(e) => setAdress(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit">Confirm</Button>
        <p>Order Id: {orderId}</p>
      </form>
    </>
  );
};
export default OrderId;
