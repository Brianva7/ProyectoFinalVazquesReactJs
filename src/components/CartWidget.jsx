import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Button } from "@chakra-ui/react";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  });

  return (
    <div className="cartButton">
      <Button colorScheme="orange" size="xs">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>{cartCount}</span>
      </Button>
    </div>
  );
};

export default CartWidget;
