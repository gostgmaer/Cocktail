import React from "react";
import { FaReact, FaUser } from "react-icons/fa";
import HeaderNavigation from "./HeaderNavigation";
import './header.scss'

const Header = () => {
  return (
    <React.Fragment>
      <header>
      <HeaderNavigation></HeaderNavigation>
      </header>
    </React.Fragment>
  );
};

export default Header;
