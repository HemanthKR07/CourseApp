import React from "react";
import Button from "@mui/material/Button";

function EmailVerification() {
  function generateit() {
    fetch();
  }
  return (
    <>
      <div className="veri_blk">
        <h3 className="h3_veri">EMAIL VERIFICATION</h3>
        <h3 className="h3_email">EMAIL :</h3>
        <input type="email" name="email" id="" placeholder="" />
        <Button variant="outlined" id="veri_btn" onCLick={generateit}>
          Generate OTP
        </Button>
      </div>
    </>
  );
}

export default EmailVerification;
