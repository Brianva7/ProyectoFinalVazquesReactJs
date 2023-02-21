import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const getElements = async () => {
    const res = await fetch(`/products.json`);
    const data = await res.json();
    return data;
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getElements().then((products) => setProducts(products));
  }, []);

  const catFilter = products.filter(
    (products) => products.category === category
  );
  return (
    <>
      {category ? (
        <ItemList products={catFilter} />
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
