import { useState, useContext } from "react";
import { Button, Box } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import React from "react";
import Swal from "sweetalert2";

const ItemCount = ({ id, name, price, stock }) => {
  const { cart, setCart } = useContext(CartContext);
  let [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Swal.fire("La cantidad no puede superar el stock disponible");
    }
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      Swal.fire("La cantidad no puede ser menor a 1");
    }
  };
  const reset = () => {
    setCount((count = 1));
  };

  const addToCart = () => {
    setCart((items) => {
      const isInCart = items.some((item) => item.id === id);
      if (isInCart) {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...items, { id, price, name, quantity: count }];
      }
    });
  };
  return (
    <>
      <Button onClick={restar} variant="solid">
        -
      </Button>
      <Box className="countLabel">{count.toString()}</Box>
      <Button onClick={sumar} variant="solid">
        +
      </Button>
      <Button onClick={reset} variant="solid" color="red.600">
        Reset
      </Button>
      <Button onClick={() => addToCart()} variant="solid" color="teal">
        Buy
      </Button>
    </>
  );
};

export default ItemCount;
