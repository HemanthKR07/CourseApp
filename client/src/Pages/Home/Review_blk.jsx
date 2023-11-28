import React from "react";
import "../Review_blk.css";
function Review_blk(props) {
  return (
    <>
      <div className="blk">
        <img src={props.img} className="img_rev" alt="" />
        <p className="p1_rev">{props.review}</p>
        <div className="info">
          <h6 className="h6_rev">{props.name}</h6>
          <p className="p2_rev">| {props.place}</p>
        </div>
      </div>
    </>
  );
}

export default Review_blk;
