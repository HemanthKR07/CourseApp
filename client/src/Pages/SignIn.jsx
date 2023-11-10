import { React, useState } from "react";
import "../Styles/SignIn.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function login() {
    const data = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pass,
      }),
    });

    const response = data.json();
  }

  return (
    <>
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
            SIGN IN
          </Button>
          <br />
          <h6 className="si_h6">
            Don't have an account ?{" "}
            <Link to="/signup">
              <span className="si_sp1">Sign Up</span>
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
}

export default SignIn;
