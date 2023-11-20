// import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../Styles/EmailVerification.css";
import { Link } from "react-router-dom";
function EmailVerification({ receiveData }) {
  return (
    <>
      <div className="complete_si">
        <div className="si_blk">
          <h3 className="si_title">Verification</h3>
          <p className="si_p1">Please verify your email id to sign up.</p>
          <h3 className="si_s1 si">EMAIL</h3> <br />
          <input
            type="text"
            name="email"
            id=""
            className="i1"
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            placeholder={receiveData}
          />
          <br />
          <h3 className="si_s2 si rem2">PASSWORD</h3> <br />
          <input
            type="text"
            name="pass"
            id=""
            className="i1 i2 rem2"
            placeholder="Create Password"
            // onChange={(e) => {
            //   setPass(e.target.value);
            // }}
          />
          <br />
          <Button
            variant="contained"
            style={{ marginTop: "1px" }}
            // onClick={login}
          >
            Generate OTP
          </Button>
          <br />
          <h6 className="si_h6">
            Don't have an account ?{" "}
            <Link to="/">
              <span className="si_sp1">Sign Up</span>
            </Link>
          </h6>
        </div>
      </div>
      {/* <div className="veri_blk">
        <h3 className="h3_veri">EMAIL VERIFICATION</h3>
        <h3 className="h3_email">EMAIL :</h3>
        <input type="email" name="email" id="" placeholder="" />
        <Button variant="outlined" id="veri_btn" onCLick={generateit}>
          Generate OTP
        </Button>
      </div> */}
    </>
  );
}

export default EmailVerification;
