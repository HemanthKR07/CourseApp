import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";
// import profile from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\Practice\\client\\src\\images\\Ppic.jpg";

function Nav() {
  function mouseOver() {
    const blk = document.querySelector(".courses_blk");
    blk.style.display = "block";
  }
  function mouseOut() {
    const blk = document.querySelector(".courses_blk");
    blk.style.display = "none";
  }

  function goToSearch() {
    window.location.href = "/search";
  }
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="main">
        <h3 className="title">Coursera</h3>
        <div className="buttons">
          <ul className="ul_p">
            <li className="li4 link4 l">
              <button className="cour" onClick={goToSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="search"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </li>
            <li className="li1 link1 l">
              <button
                className="cour"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                COURSES
              </button>
            </li>
            <li className="li1">
              <Link to="/launchcourse" className="link2 l">
                LAUNCH COURSE
              </Link>
            </li>
            <li className="li1">
              <Link to="/profile" className="link3 l">
                PROFILE
              </Link>
            </li>
          </ul>
          <div
            className="courses_blk"
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          >
            <ul className="ul_c1">
              <Link to="/purchasedcourses">
                {" "}
                <li className="li1 ul2">Purchased Courses</li>
              </Link>
              <hr />
              <Link to="/mycourses">
                <li className="li2 ul2">My Courses</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
