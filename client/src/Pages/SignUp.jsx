import { React, useState } from "react";
import "../Styles/SignUp.css";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [sotp, setsotp] = useState();
  const [OTP, setOTP] = useState();
  const [isValidOTP, setIsValidOTP] = useState(false);

  async function Createit(name, email, pass) {
    try {
      const resp = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          UserName: name,
          email: email,
          pass: pass,
        },
      });
      const data = await resp.json();

      if (resp.status == 200) {
        const fDiv = document.querySelector(".complete_su");
        const sDiv = document.querySelector(".si1");
        if (fDiv) {
          fDiv.classList.toggle("rem1");
          sDiv.classList.toggle("rem2");
          generateAgain(email);
        }
      }
    } catch (err) {
      console.log(`Error1 : ${err.message}`);
    }
  }

  async function generateAgain(email) {
    try {
      console.log("In GenerateAgain Block");
      console.log(email);
      const generate = await fetch("http://localhost:5000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          UserName: name,
          email: email,
          pass: pass,
        },
      });

      const mailid = await generate.json();

      if (generate.status == 200) {
        setsotp(mailid.otp);
        console.log(mailid.otp);
      }
    } catch (error) {
      console.log("Error in fetch gen req : ", error);
    }
  }

  function goBack() {
    const fDiv = document.querySelector(".complete_su");
    const sDiv = document.querySelector(".si1");
    if (fDiv) {
      fDiv.classList.toggle("rem1");
      sDiv.classList.toggle("rem2");
    }
  }

  async function createAccount(sotp, OTP) {
    console.log("sotp", sotp);
    console.log("OTP", OTP);
    if (sotp == OTP) {
      console.log("Hello");
      setIsValidOTP(true);

      const create = await fetch("http://localhost:5000/createUser", {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          userName: name,
          email: email,
          pass: pass,
        },
      });

      const data2 = await create.json();
      if (create.status == 200) {
        console.log("User created !");
      } else {
        console.log("Error while creating User !");
      }
    } else {
      console.log("Invalid OTP");
    }
  }
  return (
    <>
      <div className="complete_su ">
        <div className="su_blk">
          <h3 className="su_title">Sign Up</h3>
          <p className="su_p1">
            Learn on your own time from top universities and businesses.
          </p>
          <h3 className="su_s1 su">FULL NAME</h3> <br />
          <input
            type="text"
            name="name"
            id=""
            className="i1"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            placeholder="Enter your full name"
          />{" "}
          <br />
          <h3 className="su_s2 su">EMAIL</h3> <br />
          <input
            type="text"
            name="email"
            id=""
            className="i1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="name@gmail.com"
          />{" "}
          <br />
          <h3 className="su_s3 su">PASSWORD</h3> <br />
          <input
            type="text"
            name="pass"
            id=""
            className="i1"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            placeholder="Create Password"
          />
          <br />
          <Button
            variant="contained"
            style={{ marginTop: "18px" }}
            onClick={() => {
              Createit(name, email, pass);
            }}
          >
            Sign Up
          </Button>
          <br />
          <h5 id="status"></h5>
          <h6 className="su_h6">
            Already have an account ?{" "}
            <Link to="/signin">
              <span className="su_sp1">Sign In</span>
            </Link>
          </h6>
        </div>
      </div>

      {/*  Verification Block !!!*/}
      <div className="si1 rem2">
        <div className="si_blk">
          <h3 className="si_title">Verification</h3>
          <button
            id="vB1"
            style={{ marginTop: "1px", backgroundColor: "white" }}
            onClick={goBack}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <p className="si_p">
            Please verify by entering the OTP sent to the email
          </p>
          <h6 className="si_h6"></h6>
          <h3 className="si_s1 si">OTP</h3> <br />
          <input
            type="number"
            name="otp"
            id=""
            className="i1"
            onChange={(e) => {
              setOTP(e.target.value);
            }}
            placeholder="Enter OTP"
          />
          <br />
          <br />
          <div className="si_buttons">
            <Button
              id="si_go"
              variant="contained"
              style={{ marginTop: "1px" }}
              onClick={() => {
                generateAgain(email);
              }}
            >
              Generate Again
            </Button>
            <Button
              id="si_ca"
              variant="contained"
              style={{ marginTop: "1px" }}
              onClick={() => {
                createAccount(sotp, OTP);
              }}
            >
              Create Account
            </Button>
            {isValidOTP ? <Navigate to="/home" /> : <p></p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
