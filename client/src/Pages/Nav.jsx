import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";
import profile from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\Practice\\client\\src\\images\\Ppic.jpg";

function Nav() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="main">
        <h3 className="title">Coursera</h3>
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
