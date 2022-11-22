import React, { Fragment } from "react";
import HeaderSidebar from "./HeaderSidebar";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";

const HeaderNavigation = () => {
  const active = {
    color: "#6c757d !important;",
  };

  return (
    <Fragment>
      <WebMenu></WebMenu>
      <MobileMenu></MobileMenu>
      <HeaderSidebar></HeaderSidebar>
    </Fragment>
  );
};

export default HeaderNavigation;
