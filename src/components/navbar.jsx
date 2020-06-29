import React, { useState } from "react";
import { Link } from "react-router-dom";

import PeachImg from "./../assets/peach-tree.png";

import "./../styles/navbar.styles.scss";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg">
      <div className="container">
        <Link
          className="navbar-brand"
          to={sessionStorage.getItem("loggedInUser") ? "/gallery" : "/"}
        >
          <img
            src={PeachImg}
            alt="peach-icon"
            style={{ marginBottom: "5px" }}
          />{" "}
          The Peach Gallery
        </Link>{" "}
        <button
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${classOne}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {" "}
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            {sessionStorage.getItem("loggedInUser") ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"/gallery"}>
                    Gallery
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    sessionStorage.removeItem("loggedInUser");
                    window.location.reload();
                  }}
                >
                  <Link className="nav-link" to="/">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to={"/join"}>
                  Login/ Register
                </Link>
              </li>
            )}
            {sessionStorage.getItem("loggedInUser") && (
              <li className="nav-item nav-link">
                Hi!{" "}
                {JSON.parse(sessionStorage.getItem("loggedInUser")).username}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
