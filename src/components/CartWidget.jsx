import React from "react";
import { Button } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <div className="cartButton">
      <Button colorScheme="teal" size="xs">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>2</span>
      </Button>
    </div>
  );
};

export default CartWidget;
