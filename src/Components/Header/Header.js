import React from "react";
import { FaReact, FaUser } from "react-icons/fa";
import HeaderNavigation from "./HeaderNavigation";
import './header.scss'

const Header = () => {
  return (
    <div>
      <header>
      <HeaderNavigation></HeaderNavigation>
      </header>
    </div>
  );
};

export default Header;
