import React from "react";
import "./PurchasePlus.css";
import PurchaseNav from "./PurchaseNav";
import Button from "@mui/material/Button";
import img1 from "../images/p1.png";
import img2 from "../images/1.png";
import img3 from "../images/p3.png";

function PurchasePlus() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="pp_container">
        <PurchaseNav />
        <div className="pp_con2">
          <h2 className="pp_title">
            Coursera <span className="pp_sp1">PLUS</span>
          </h2>
          <p className="pp_p">
            Investing in your future has never been easier. Gain access to
            thousands of programs, from leading companies and universities, for
            one low price with Coursera Plus. Whether you're looking to start,
            switch, or advance in your career, you'll find a program to help you
            reach your goals. <br />
            <br />
            {/* <br /> */}
            <span className="pp_sp2">
              For a limited time only, your first month of Coursera Plus you get
              it at best price of 3999. With Coursera Plus you have the ultimate
              flexibility to start new courses and move between programs at no
              additional cost.
            </span>
            <br />
            <br />
            <span className="pp_sp3">
              77% of people learning on Coursera report career benefits, such as
              new skills, increased pay, and new job opportunities*. What are
              you waiting for? Get started today!
            </span>
          </p>
          <Button variant="contained" id="pp_btn1">
            BUY NOW
          </Button>
          <div className="pp_images">
            <img src={img1} alt="" className="pp_img1 pi" />
            <img src={img2} alt="" className="pp_img2 pi" />
            <img src={img3} alt="" className="pp_img3 pi" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchasePlus;
