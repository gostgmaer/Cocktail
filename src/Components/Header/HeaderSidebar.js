import React from "react";
import { FaClosedCaptioning, FaCross, FaDoorClosed, FaWindowClose } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { NavURL, socialURL } from "../../Assets/StaticData/Data";
import { useGlobalContext } from "../../Context/Context";

const HeaderSidebar = () => {
  const { issidebarOpen, closeSidebar } = useGlobalContext();
  const display = { visibility: "visible" };

  const rendersidebar = () => {
    return;
  };
  // console.log(display);
  return (
    <div className="newClass">
      <div
        class={`${
          issidebarOpen
            ? "offcanvas offcanvas-start show"
            : "offcanvas offcanvas-start"
        }`}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        id="offcanvasScrolling"
        style={display}
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header bg-dark">
          <h5 class="offcanvas-title text-light" id="offcanvasScrollingLabel">
           Cocktail Application
          </h5>
          <button
            type="button"
            onClick={closeSidebar}
            class="btn text text-primary"
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          > <FaWindowClose></FaWindowClose> </button>
        </div>
        <div class="offcanvas-body">
        <ul class="nav col-12 col-lg-auto my-2 text-start d-block  my-md-0 text-small">
              {NavURL.map((nav) => {
                const { id, text, url, icon } = nav;
                return (
                  <li className="list-item-menu" key={id}>
                    <NavLink to={url} className="nav-link link-dark">
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className=" align-items-end">
            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              {socialURL.map((nav) => {
                const { id, text, url, icon } = nav;
                return (
                  <li className="list-item-menu" key={id}>
                    <NavLink to={url} className="nav-link link-dark">
                      {icon}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            </div>
        </div>
      </div>
      {issidebarOpen ? <div class="modal-backdrop fade show"></div> : ""}
    </div>
  );
};

export default HeaderSidebar;
