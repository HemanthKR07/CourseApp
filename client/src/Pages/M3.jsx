import React from "react";
import "../Styles/M3.css";
import Rev from "./Review_blk";
import p1 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\Practice\\client\\src\\images\\p1.png";
import p2 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\Practice\\client\\src\\images\\p2.png";
import p3 from "C:\\Users\\Hemanth KR\\OneDrive\\Desktop\\Practice\\client\\src\\images\\p3.png";

function M3() {
  return (
    <>
      <div className="main13">
        <hr />
        <h3 className="h3_m3">
          Join thousands of learners who are achieving their goals with Coursera
          Plus
        </h3>
        <p className="p1_m3">
          87% of learners on Coursera report career benefits such as promotions,
          raises, and successful career changes.
        </p>
        <div className="review">
          <Rev
            img={p1}
            review="I have a full time job and 3 kids. I needed the flexibility offered by Coursera Plus in order to achive my goals. I learned Business stastistics and analytics to apply for my job. And I'm learning Python now"
            name="Abigail P."
            place="US"
          />
          <Rev
            img={p2}
            review="The only benefit with Coursera is that it has partnered with very well-known universities that provides their top courses to you on this platform. Their partnership with many renowned universities allows you to get certification in specializations or even a master’s degree."
            name="Ines."
            place="France"
          />
          <Rev
            img={p3}
            review="Coursera is a great way to learn about subjects you want to learn about. The courses are well-structured and easy to follow, but there are some things you should know before signing up for one of their courses. In this review I'll go over the pros and cons of each course."
            name="Shi Jie F."
            place="Singapore"
          />
        </div>
        <p className="p2_m3">
          <b>Source:</b> Coursera Learner Outcomes Survey 2020
        </p>
        <hr />
      </div>
    </>
  );
}

export default M3;
