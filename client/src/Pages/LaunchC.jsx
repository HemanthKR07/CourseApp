import React from "react";
import Foot from "./Foot";
import "../Styles/LaunchC.css";
import LaunchBlock from "./LaunchBlock";
import NavLaunch from "./NavLaunch";
import Button from "@mui/material/Button";
import LaunchBlock2 from "./LaunchBlock2";
import Img2 from "../images/createcourse2.jpg";
import Img3 from "../images/createcourse3.jpg";

function LaunchC() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="l_b1">
        <NavLaunch />
        <Button id="l_b1" variant="outlined">
          Start Creating
        </Button>
        <LaunchBlock />
        <div className="blocks2">
          <LaunchBlock2
            img={Img2}
            title="BUILD YOU AUDIENCE"
            text="Set your course up for success by building your audience."
          />
          <LaunchBlock2
            img={Img3}
            title="BUILD YOU AUDIENCE"
            text="Set your course up for success by building your audience."
          />
        </div>
        <h5 className="l_h5">Are You Ready To Begin ? </h5>
        <Button id="l_b2" variant="outlined">
          Start Creating
        </Button>
      </div>
      <Foot />
    </>
  );
}

export default LaunchC;
