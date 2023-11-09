import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

function Nav() {
  return (
    <>
      <div className="main">
        <h3 className="title">Coursera</h3>
        <div className="buttons">
          <Link to="/signin">
            <button className="b1">LOG IN</button>
          </Link>

          <Link to="/signup">
            <button className="b2">JOIN FOR FREE</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
