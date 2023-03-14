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
          Catalogue
        </MenuButton>
        <MenuList>
          <Link to="/catalogue">
            <MenuItem>All products</MenuItem>
          </Link>

          <Link to={`/category/${"indoor"}`}>
            <MenuItem>Indoor</MenuItem>
          </Link>
          <Link to={`/category/${"outdoor"}`}>
            <MenuItem>Outdoor</MenuItem>
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
