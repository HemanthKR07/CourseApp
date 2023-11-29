import { React, useState } from "react";
import { Navigate } from "react-router-dom";
import "./SignIn.css";
import Button from "@mui/material/Button";

function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [toSignUp, setSignUp] = useState(false);

  async function login() {
    const login = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        email: email,
        pass: pass,
      },
    });

    const response = await login.json();

    if (login.status == 200) {
      userExists(true);
      console.log("User logged");
      // } else if (data.status == 401) {
    } else {
      console.log("User doesnt exist !");
    }
  }

  function goToSignUp() {
    setSignUp(true);
  }

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="complete_si">
        <div className="si_blk">
          <h3 className="si_title">Sign In</h3>
          <p className="si_p1">Please enter your email and password.</p>
          <h3 className="si_s1 si">EMAIL</h3> <br />
          <input
            type="text"
            name="email"
            id=""
            className="i1"
            placeholder="name@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <br />
          <h3 className="si_s2 si">PASSWORD</h3> <br />
          <input
            type="text"
            name="pass"
            id=""
            className="i1"
            placeholder="Create Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <br />
          <Button
            variant="contained"
            style={{ marginTop: "18px" }}
            onClick={login}
          >
            {}
            SIGN IN
          </Button>
          {/* {userExists ? <Navigate to="/home" /> : <p></p>} */}
          <br />
          <h6 className="si_h6">
            Don't have an account ?{" "}
            <span
              className="si_sp1"
              onClick={goToSignUp}
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </span>
          </h6>
          {toSignUp ? <Navigate to="/signup" /> : <></>}
        </div>
      </div>
    </>
  );
}

export default SignIn;
