import React from "react";
import { FaHamburger, FaReact } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
const MobileMenu = () => {

  const {openSidebar} = useGlobalContext()
  return (
    <div class="px-3 py-2 bg-dark d-block d-sm-none text-white">
      <div class="container">
        <div class=" d-flex align-items-center col-12 ">
          <div className="text-start col-6">
            <Link
              to="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <FaReact></FaReact>
            </Link>
          </div>

          <div className="text-end col-6">
         
            <button type="button" class="btn btn-light" onClick={openSidebar}>
              <FaHamburger></FaHamburger>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
