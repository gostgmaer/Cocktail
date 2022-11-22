import React from "react";
import { FaHamburger, FaReact } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { NavURL, socialURL } from "../../Assets/StaticData/Data";
const WebMenu = () => {
  return (
    <div className="d-none d-sm-block">
    
      <div class="px-3 py-2 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <FaReact></FaReact>
            </Link>

            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              {NavURL.map((nav) => {
                const { id, text, url, icon } = nav;
                return (
                  <li className="list-item-menu" key={id}>
                    <NavLink to={url} className="nav-link text-white">
                      {icon} {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div class="px-3 py-2 bg-white opacity-75 border-bottom mb-3">
        <div class="container d-flex flex-wrap justify-content-center">
          <div class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              {socialURL.map((nav) => {
                const { id, text, url, icon } = nav;
                return (
                  <li className="list-item-menu" key={id}>
                    <a
                      href={url}
                      className="nav-link link-dark"
                      target={`_blank`}
                    >
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div class="text-end">
            <a href="/">
              <button type="button" class="btn btn-light text-dark me-2">
                Login
              </button>
            </a>
            <a href="/">
              <button type="button" class="btn btn-primary">
                Sign-up
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebMenu;
