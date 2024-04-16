import React from "react";
import "./Navbar.css";
import { MdSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Nav_assets/logo.png";
const Navbar = () => {
  return (
    <nav className="c-navbar">
      <ul className="d-flex m-0 justify-content-between">
        <NavLink
          to="/"
          className={`${(nav) =>
            nav.isActive ? "navbar-active" : ""} text-decoration-none
          `}
        >
          <li className="logo">
            <img src={logo} alt="logo" className="h-100 w-100" />
          </li>
        </NavLink>
        <li className="">
          <form action="" className="search-form border rounded">
            <input
              type="text"
              className="border-0"
              style={{ outline: "none" }}
              placeholder="Rechanrger un service"
            />
            <button className="btn btn-search">
              <MdSearch size={25} />
            </button>
          </form>
        </li>
        <NavLink
          to="/"
          className={`${(nav) =>
            nav.isActive ? "navbar-active" : ""} text-decoration-none
          `}
        >
          {" "}
          <li>Découvrir</li>
        </NavLink>
        <NavLink
          to="/"
          className={`${(nav) =>
            nav.isActive ? "navbar-active" : ""} text-decoration-none
          `}
        >
          {" "}
          <li>S'inscrire en tant que consultant</li>
        </NavLink>
        <NavLink
          to="/"
          className={`${(nav) =>
            nav.isActive ? "navbar-active" : ""} text-decoration-none
          `}
        >
          <li>S'inscrire en tant qu'étudiant</li>
        </NavLink>
        <NavLink
          to="/"
          className={`${(nav) =>
            nav.isActive ? "navbar-active" : ""} text-decoration-none
          `}
        >
          {" "}
          <li className="connect-btn btn">Connectez-vous</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;