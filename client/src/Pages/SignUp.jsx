import { React, useState } from "react";
import "../Styles/SignUp.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [otp, setOtp] = useState("");
  let globalVariable = 0;

  async function Createit(name, email, pass) {
    try {
      const resp = await fetch("http://localhost:5000/", {
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
          generateAgain();
        }
      }

      // if (resp.status == 200) {
      //   console.log("Rendering Home ");
      // window.location.href = "/verification";
      //   data.status(200).json({ status: "Success" });
      // } else {
      //   console.log("Error while rendering HOME component");
      //   resp.status(404).json({ status: "Error while rendering" });
      // }
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
          email: email,
        },
      });
      if (generate.status == 200) {
        const resp = await generate.json();
        globalVariable = resp.otp;
        console.log(resp.message);
      }
    } catch (error) {
      console.log("Error in fetch gen req : ", error);
    }

    // if (generate.status === 200) {
    //   const tag = document.querySelector(".si_h6");
    //   tag.innerHTML = generate.message;
    // }
  }

  function goBack() {
    const fDiv = document.querySelector(".complete_su");
    const sDiv = document.querySelector(".si1");
    if (fDiv) {
      fDiv.classList.toggle("rem1");
      sDiv.classList.toggle("rem2");
    }
  }

  function createAccount(otp, globalVariable) {
    if (otp === globalVariable) {
      console.log("Hello");
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
          <button id="vB1" style={{ marginTop: "1px" }} onClick={goBack}>
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
              setOtp(e.target.value);
            }}
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
              onClick={createAccount}
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
