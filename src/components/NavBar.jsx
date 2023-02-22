import React from "react";
import CartWidget from "./CartWidget";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to={"./"}>
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
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
