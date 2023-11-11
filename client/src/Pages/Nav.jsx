import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";
import profile from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\Practice\\client\\src\\images\\Ppic.jpg";
function Nav() {
  return (
    // const condition = false;
    <>
      <div className="main">
        <h3 className="title">Coursera</h3>
        {/* if (!condition){" "}
        {
          <div className="buttons">
            <Link to="/signin">
              <button className="b1">LOG IN</button>
            </Link>

            <Link to="/signup">
              <button className="b2">JOIN FOR FREE</button>
            </Link>
          </div>
        }{" "}
        else{" "}
        { */}
        <div className="buttons">
          <Link to="/profile">
            <button className="b1 bimg">
              <img src={profile} alt="" className="profileImg" />
            </button>
          </Link>

          {/* <Link to="/signup">
            <button className="b2">JOIN FOR FREE</button>
          </Link> */}
        </div>
        {/* } */}
      </div>
    </>
  );
}

export default Nav;
