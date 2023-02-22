import { useState, useEffect } from "react";
import { Button, Box } from "@chakra-ui/react";
import React from "react";
import Swal from "sweetalert2";

const ItemCount = ({ stock }) => {
  let [contador, setContador] = useState(1);
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire("La cantidad no puede superar el stock disponible");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      Swal.fire("La cantidad no puede ser menor a 1");
    }
  };
  const reset = () => {
    setContador((contador = 1));
  };

  return (
    <>
      <Button onClick={restar} variant="solid">
        -
      </Button>
      <Box className="countLabel">{contador}</Box>
      <Button onClick={sumar} variant="solid">
        +
      </Button>
      <Button onClick={reset} variant="solid">
        Reset
      </Button>
    </>
  );
};

export default ItemCount;
