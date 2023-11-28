import { React, useState } from "react";
import pic from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\Practice\\client\\src\\images\\Ppic.jpg";
import "../Styles/Profile.css";
import Button from "@mui/material/Button";
import ProjectCard from "./ProjectCard";
import Foot from "../Foot/Foot";

function Profile() {
  const [username, setUsername] = useState("HELLO_07");
  const [mail, setMail] = useState("krh7799@gmail.com");

  const [c_count, setCount] = useState(0);
  const [cp_count, setCPCount] = useState(0);
  const [w_count, setWCount] = useState(0);

  var usname;
  var eemail;

  function editit() {
    const div1 = document.getElementById("edit");
    div1.classList.toggle("rem");
  }

  function updateit() {
    setUsername(usname);
    setMail(eemail);

    const div1 = document.getElementById("edit");
    div1.classList.add("rem");
  }

  function toBacktoProfile() {
    window.location.href = "/home";
  }

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>

      <div className="main_prof">
        <h3 className="h3_pro">PROFILE</h3>
        <div className="prof1">
          <h3 className="pro_t1">ACCOUNT</h3>
          <img src={pic} alt="profile" className="pro_img" />
          <div className="pro_d1">
            <h6 className="h6_t2 pt">USERNAME : </h6>
            <h6 className="h6_t3 pt" id="username">
              {username}
            </h6>
          </div>
          <div className="pro_d2">
            <h6 className="h6_t4 pt">MAIL : </h6>
            <h6 className="h6_t5 pt" id="mailid">
              {mail}
            </h6>
          </div>
          <Button variant="outlined" id="pro_b1" onClick={editit}>
            EDIT
          </Button>
        </div>
        <div className="prof2">
          <h3 className="pro_t1 det">DETAILS</h3>
          <div className="proj_d">
            <h3 className="h3_det1 f1">INTERESTED FIELD :</h3>
            <h6 className="counts_1">WEB-DEV</h6>
          </div>
          <div className="proj_d">
            <h3 className="h3_det1">COURSES PURCHASED :</h3>
            <h6 className="counts">{c_count}</h6>
          </div>
          <div className="proj_d">
            <h3 className="h3_det1">COURSES PUBLISHED :</h3>
            <h6 className="counts">{cp_count}</h6>
          </div>
          <div className="proj_d">
            <h3 className="h3_det1">TOTAL WATCH HOURS :</h3>
            <h6 className="counts">{w_count}</h6>
          </div>
        </div>
      </div>
      <button id="pB1" onClick={toBacktoProfile}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </button>

      {/* EDITING AREA */}
      <div className="edit rem" id="edit">
        <h3 className="edit_1">EDIT HERE</h3>
        <div className="inp1 inp">
          <h3 className="edit_2">USERNAME : </h3>
          <input
            type="text"
            name="username"
            id="input1"
            onChange={(e) => {
              usname = e.target.value;
            }}
            placeholder={username}
          />
        </div>
        <div className="inp inp2">
          <h3 className="edit_2" id="e2">
            MAIL :{" "}
          </h3>
          <input
            type="text"
            name="username"
            className="input2"
            id="input1"
            onChange={(e) => {
              eemail = e.target.value;
            }}
            placeholder={mail}
          />
        </div>
        <Button
          variant="outlined"
          className="updateit "
          id="e_btn"
          onClick={updateit}
        >
          UPDATE
        </Button>
      </div>

      <div className="details_blk">
        <h3 className="h3_det">EXPERIENCES</h3>
        <ProjectCard
          title="PROJECTS"
          text="Add projects here to demonstrate your technical expertise and ability to solve real-world problems."
          b_txt="PROJECTS"
        />
        <ProjectCard
          title="WORK HISTROY"
          text="Add your past work experience here. If you’re just starting out, you can add internships or volunteer experience instead."
          b_txt="WORK HISTROY"
        />
        <ProjectCard
          title="EDUCATION"
          text="Add your educational background here to let employers know where you studied or are currently studying."
          b_txt="EDUCATION"
        />
      </div>
      <Foot />
    </>
  );
}

export default Profile;
