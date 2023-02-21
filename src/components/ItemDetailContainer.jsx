import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const getElements = async () => {
    const res = await fetch(`/products.json`);
    const data = await res.json();
    return data;
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getElements().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <Container maxW="md" bg="blue.600" color="white">
        <ItemDetail products={products} />
      </Container>
    </>
  );
};

export default ItemDetailContainer;
