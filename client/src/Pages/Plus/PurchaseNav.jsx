import React from "react";
import "./PurchaseNav.css";
function PurchaseNav() {
  function animateit(event) {
    const btnElement = event.target.closest(".btn_n");
    if (btnElement) {
      btnElement.parentElement.classList.toggle("underline-animation");
    }
  }
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="p_nav">
        <ul className="ul_nav">
          <li className="li_pn1">
            <button className="btn_n" onMouseOver={animateit}>
              For Individuals
            </button>
            <div class="d">
              <div class="d1"></div>
              <div class="d2"></div>
            </div>
          </li>
          <li className="li_pn2">
            <button className="btn_n " onMouseOver={animateit}>
              For University
            </button>
            <div class="d">
              <div class="d1"></div>
              <div class="d2"></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PurchaseNav;
