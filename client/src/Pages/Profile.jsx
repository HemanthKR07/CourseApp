import React from "react";
import pic from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\Practice\\client\\src\\images\\Ppic.jpg";
import "../Styles/Profile.css";
import Button from "@mui/material/Button";

function Profile() {
  return (
    <>
      <div className="main_prof">
        <h3 className="h3_pro">PROFILE</h3>
        <div className="prof1">
          <h3 className="pro_t1">ACCOUNT</h3>
          <img src={pic} alt="profile" className="pro_img" />
          <div className="pro_d1">
            <h6 className="h6_t2 pt">USERNAME : </h6>
            <h6 className="h6_t3 pt" id="username">
              HELLO_07
            </h6>
          </div>
          <div className="pro_d2">
            <h6 className="h6_t4 pt">MAIL : </h6>
            <h6 className="h6_t5 pt" id="mailid">
              krh7799@gmail.com
            </h6>
          </div>
          <Button variant="outlined" id="pro_b1">
            EDIT
          </Button>
        </div>
        <div className="prof2">
          <h3 className="pro_t1">PERSONAL DETAILS</h3>
        </div>
      </div>
    </>
  );
}

export default Profile;
