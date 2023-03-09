import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Button, Center } from "@chakra-ui/react";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="prodCartContainer">
        <div className="cartHeader">
          <div className="cartBlock">Product</div>
          <div className="cartBlock">Quantity</div>
          <div className="cartBlock">Price</div>
          <div className="cartBlock">Total</div>
        </div>
        {cart.map((prod) => (
          <div key={prod.id} className="cartItems">
            <div className="cartBlock">{prod.name}</div>
            <div className="cartBlock">{prod.quantity}</div>
            <div className="cartBlock">${prod.price}</div>
            <div className="cartBlock">${prod.price * prod.quantity}</div>
          </div>
        ))}
        <Center padding={5}>
          <Button>Confirm</Button>
        </Center>
      </div>
    </>
  );
};

export default Cart;
