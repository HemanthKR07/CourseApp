import { React, useState } from "react";
import "../Styles/SignUp.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// , useHistory
import { useNavigate } from "react-router-dom";

function SignUp() {
  // const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  async function Createit(name, email, pass) {
    try {
      const resp = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, pass }),
      });

      const data = await resp.json();

      if (data.ok) {
        console.log("Rendering Home ");
        // history.push("/home");
        navigate("/home");
        resp.status(200).json({ status: "Success" });
      } else {
        console.log("Error while rendering HOME component");
      }
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
