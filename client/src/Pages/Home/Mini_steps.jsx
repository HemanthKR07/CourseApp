import React from "react";
import "../Styles/Mini_steps.css";

function Mini_steps(props) {
  return (
    <>
      <div className="block" id="blk">
        <img src={props.img} class="steps_img" id={props.id} alt="" />
        <h4 className="h4_1">{props.title}</h4>
        <br />
        <p className="p_1">{props.desc}</p>
        <br /> <br />
      </div>
    </>
  );
}

export default Mini_steps;
