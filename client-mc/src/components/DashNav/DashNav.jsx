import React from "react";
import "./DashNav.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Nav_assets/logo.png";
import studentProfile from "../../assets/Nav_assets/studentProfile.jpeg";
import { FaAngleDown, FaRegBell, FaRegEnvelope } from "react-icons/fa6";
const DashNav = ({ navData, type }) => {
  return (
    <>
      <nav className="c-navbar d-flex">
        <ul className="d-flex gap-5 flex-wrap m-0 justify-content-between">
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
          {navData?.map((value, key) => (
            <>
              {value?.child ? (
                <li className="dash-child">
                  <span> {value?.name}</span>{" "}
                  <span className="drop-icon">
                    <FaAngleDown />
                  </span>
                  <ul className="childrens m-0 p-0 ">
                    {value?.child?.map((sbele, index) => (
                      <NavLink
                        key={index}
                        to={sbele.path}
                        className={`${(nav) =>
                          nav.isActive
                            ? "navbar-active"
                            : ""} text-decoration-none 
           `}
                      >
                        <li
                          className={
                            value.name === "Connectez-vous"
                              ? "connect-btn btn"
                              : "py-1"
                          }
                        >
                          {sbele?.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                </li>
              ) : (
                <NavLink
                  key={key}
                  to={value.path}
                  className={`${(nav) =>
                    nav.isActive ? "navbar-active" : ""} text-decoration-none
          `}
                >
                  <li
                    className={
                      value.name === "Connectez-vous" ? "connect-btn btn" : ""
                    }
                  >
                    {value?.name}
                  </li>
                </NavLink>
              )}
            </>
          ))}
        </ul>
        <ul className="ms-auto d-flex align-items-center gap-4">
          <li>
            <span className="p-1  rounded border">
              <FaRegBell />{" "}
            </span>
          </li>
          <li>
            <span className="p-1 rounded border">
              <FaRegEnvelope />
            </span>
          </li>
          <li className="d-flex align-items-center">
            <div
              className="m-auto"
              style={{ width: "40px", aspectRatio: "1/1" }}
            >
              <img
                className="h-100 w-100 rounded-circle"
                src={studentProfile}
                alt="profile"
              />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DashNav;
