import React from "react";
import CartWidget from "./CartWidget";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to={"./"}>
        <h1 className="brand">Muebleria</h1>
      </Link>
      <Menu>
        <MenuButton
          className="menuButton"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          Catalogo
        </MenuButton>
        <MenuList>
          <Link to="/">
            <MenuItem>Todos los productos</MenuItem>
          </Link>

          <Link to={`/category/${"interior"}`}>
            <MenuItem>Interior</MenuItem>
          </Link>
          <Link to={`/category/${"exterior"}`}>
            <MenuItem>Exterior</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
