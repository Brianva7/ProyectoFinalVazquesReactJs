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
          colorScheme="orange"
          as={Button}
          rightIcon={<ChevronDownIcon color="black" />}
          overflow="hidden"
        >
          <span className="menuButton">Catalogue</span>
        </MenuButton>
        <MenuList border="2px" borderColor="orange">
          <Link to="/catalogue">
            <MenuItem>All products</MenuItem>
          </Link>

          <Link to={`/category/${"Indoor"}`}>
            <MenuItem>Indoor</MenuItem>
          </Link>
          <Link to={`/category/${"Outdoor"}`}>
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
