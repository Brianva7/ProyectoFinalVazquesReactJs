import { Center } from "@chakra-ui/react";
import React from "react";
import welcome from "../assets/welcome.jpg";

const Welcome = () => {
  return (
    <>
      <Center className="welcome">
        <img src={welcome} alt="img" />
      </Center>
    </>
  );
};

export default Welcome;
