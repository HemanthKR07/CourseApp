import React from "react";
import "../Styles/M2.css";
import l1 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\l1.png";
import l2 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\l2.png";
import l3 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\l3.png";
import l4 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\l4.png";
import l5 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\l5.png";
import l6 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\l6.png";
import l7 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\l7.png";
import s1 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\s1.png";
import s2 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\s2.png";
import s3 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\s3.png";
import s4 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\webD\\Full_stack\\Coursera\\Coursera\\src\\images\\s4.png";
import Mini from "./Mini_steps";

function M2() {
  return (
    <>
      <div className="main12">
        <p className="p1">
          Learn from <span class="sp1">275+</span> leading universities and
          companies with Coursera Plus
        </p>
        <div className="logos">
          <img src={l1} class="l1 l" alt="" />
          <img src={l2} class="l2 l" alt="" />
          <img src={l3} class="l3 l" alt="" />
          <img src={l4} class="l4 l" alt="" />
          <img src={l5} class="l5 l" alt="" />
          <img src={l6} class="l6 l" alt="" />
          <img src={l7} class="l7 l" alt="" />
        </div>
        <hr className="hr1" />
        <h3 className="title1">
          Invest in your professional goals with Coursera Plus
        </h3>
        <p className="p2">
          Get unlimited access to over 90% of courses, Projects,
          Specializations, and Professional Certificates on Coursera, taught by
          top instructors from leading universities and companies.
        </p>
        <div className="com_blk">
          <Mini
            title="Learn anything"
            img={s1}
            desc="Explore any interest or trending topic, take prerequisites, and advance your skills"
            id="one"
          />
          <Mini
            title="Save money"
            img={s2}
            desc="Spend less money on your learning if you plan to take multiple courses this year"
            id="two"
          />
          <Mini
            title="Flexible learning"
            img={s3}
            desc="Learn at your own pace, move between multiple courses, or switch to a different course"
            id="three"
          />
          <Mini
            title="Unlimited certificates"
            img={s4}
            desc="Earn a certificate for every learning program that you complete at no additional cost"
            id="four"
          />
        </div>
      </div>
    </>
  );
}

export default M2;
