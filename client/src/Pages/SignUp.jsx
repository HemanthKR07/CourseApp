import { React, useState } from "react";
import "../Styles/SignUp.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // const name = "Hemanth";
  // const email = "Hemanth@123";
  // const pass = "Hkr123";

  function Createit(name, email, pass) {
    try {
      const resp = fetch("http://localhost:5000/signup", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, pass }),
      });
      console.log(name);
    } catch (err) {
      console.log(`Error1 : ${err.message}`);
    }
  }

  return (
    <>
      <div className="complete_su">
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
            SIGN UP
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
    </>
  );
}

export default SignUp;

//   const data = {
//     name: name,
//     email: email,
//     pass: pass,
//   };
//   return fetch("/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       // if (res.ok) {
//       // } else {
//       //   throw new Error("Networke Problem");
//       // }
//       res.json();
//       console.log("Data sent !");
//     })
//     .then((data) => {
//       console.log("Success : ", data);
//     })
//     .catch((err) => {
//       console.log("Error : ", err);
//     });
// }}
