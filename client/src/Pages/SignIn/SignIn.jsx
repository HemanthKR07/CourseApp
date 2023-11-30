import { React, useState } from "react";
import { Navigate } from "react-router-dom";
import "./SignIn.css";
import Button from "@mui/material/Button";
import { setToken, getToken } from "../SignUp/Token";

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
    const message = document.querySelector(".message");

    if (login.status == 200) {
      setUserExists(true);
      console.log("Token : ", response.token);
      setToken(response.token);
      console.log("GetToken : ", getToken());
    } else {
      if (login.status == 401) {
        message.innerHTML = response.message;
      } else if (login.status == 400) {
        message.innerHTML = response.message;
      } else if (login.status == 500) {
        message.innerHTML = response.message;
      } else {
        message.innerHTML = response.message + " !  Create new account";
      }
    }
  }

  // async function verify() {
  //   const reset = await fetch("http://localhost:5000/resetpass", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       email: email,
  //     },
  //   });
  //   const respon = await login.json();

  //   if (reset.status == 200){

  //   }
  // }

  function goToSignUp() {
    setSignUp(true);
  }

  function goToVerification() {
    const first = document.querySelector(".si_blk");
    const second = document.querySelector(".forgotpass");
    const third = document.querySelector(".verify");

    first.style.display = "none";
    second.style.display = "block";
    third.style.display = "none";
  }

  function goBacktoSignIn() {
    const first = document.querySelector(".si_blk");
    const second = document.querySelector(".forgotpass");
    const third = document.querySelector(".verify");

    second.style.display = "none";
    third.style.display = "none";
    first.style.disply = "block";
  }

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="complete_si">
        <div className="si_blk ">
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
            placeholder="Enter Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <br />
          <p className="message"></p>
          <button className="fp" onClick={goToVerification}>
            Forgot Password ?
          </button>
          <br />
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={login}
          >
            {}
            SIGN IN
          </Button>
          {userExists ? <Navigate to="/home" /> : <p className="rm"></p>}
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

        <div className="forgotpass">
          <button
            id="vB1"
            style={{
              marginTop: "7px",
              marginLeft: "400px",
              backgroundColor: "white",
            }}
            onClick={goBacktoSignIn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <h3 className="si_title">Verification</h3>
          <p className="si_p1">Enter email id to reset password</p>
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
          <p className="message"></p>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={login}
          >
            {" "}
            Verify
          </Button>
        </div>
        <div className="verify"></div>
      </div>
    </>
  );
}

export default SignIn;

{
  /* <div className="forgotpass">
<button
  id="vB1"
  style={{
    marginTop: "7px",
    marginLeft: "400px",
    backgroundColor: "white",
  }}
  onClick={goBacktoSignIn}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.5em"
    viewBox="0 0 448 512"
  >
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
  </svg>
</button>
<h3 className="si_title">Verification</h3>
<p className="si_p1">Enter email id to reset password</p>
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
<p className="message"></p>
<Button
  variant="contained"
  style={{ marginTop: "20px" }}
  onClick={login}
>
  {" "}
  Verify
</Button>
</div> */
}
