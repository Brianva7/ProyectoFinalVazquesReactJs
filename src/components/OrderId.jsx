import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { FormControl, FormLabel, Box, Input } from "@chakra-ui/react";

const OrderId = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");

  const db = getFirestore();

  const ordersCollection = collection(db, "order");

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired width="100%">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Brian"
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Surname</FormLabel>
          <Input
            type="text"
            placeholder="Vazques"
            onChange={(e) => setSurname(e.target.value)}
          />
          <FormLabel>E-mail</FormLabel>
          <Input
            type="email"
            placeholder="Brian@vazques.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Phone</FormLabel>
          <Input
            type="number"
            placeholder="1123232323"
            onChange={(e) => setPhone(e.target.value)}
          />
          <FormLabel>Adress</FormLabel>
          <Input
            type="text"
            placeholder="Street 123"
            onChange={(e) => setAdress(e.target.value)}
          />
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            placeholder="Buenos Aires"
            onChange={(e) => setCity(e.target.value)}
          />
          <Box my={3} textAlign="center">
            <Button type="submit" colorScheme="orange">
              Submit
            </Button>

            <Box m={3}>Order Id: {orderId}</Box>
          </Box>
        </FormControl>
      </form>
    </>
  );
};

export default OrderId;
