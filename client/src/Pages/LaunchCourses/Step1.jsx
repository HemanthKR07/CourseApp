import { React, useState } from "react";
import "./Step1.css";
function Step1() {
  const [field, setField] = useState("Choose a category");
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  function exit() {
    window.location.href = "/home";
  }

  function goToSec() {
    const first = document.querySelector(".s1");
    const second = document.querySelector(".s2");
    const third = document.querySelector(".s3");

    const step = document.querySelector(".s_h2");

    if (first) {
      first.style.display = "none";
    }
    if (third) {
      third.style.display = "none";
    }
    if (second) {
      second.style.display = "block";
    }
    if (step) {
      step.innerHTML = "Step 2 of 5";
    }
  }

  function goToThi() {
    const second = document.querySelector(".s2");
    const third = document.querySelector(".s3");
    const fourth = document.querySelector(".s4");
    const step = document.querySelector(".s_h2");

    if (second) {
      second.style.display = "none";
    }
    if (fourth) {
      fourth.style.display = "none";
    }
    if (third) {
      third.style.display = "block";
    }
    if (step) {
      step.innerHTML = "Step 3 of 5";
    }
  }

  function goToFou() {
    const third = document.querySelector(".s3");
    const fourth = document.querySelector(".s4");
    const fifth = document.querySelector(".s5");
    const step = document.querySelector(".s_h2");

    if (third) {
      third.style.display = "none";
    }
    if (fifth) {
      fifth.style.display = "none";
    }
    if (fourth) {
      fourth.style.display = "block";
    }
    if (step) {
      step.innerHTML = "Step 4 of 5";
    }
  }
  function goToFir() {
    const first = document.querySelector(".s1");
    const second = document.querySelector(".s2");
    const step = document.querySelector(".s_h2");

    if (second) {
      second.style.display = "none";
    }
    if (first) {
      first.style.display = "block";
    }
    if (step) {
      step.innerHTML = "Step 1 of 5";
    }
  }

  function goToFif() {
    const fourth = document.querySelector(".s4");
    const fifth = document.querySelector(".s5");
    const step = document.querySelector(".s_h2");

    if (fourth) {
      fourth.style.display = "none";
    }
    if (fifth) {
      fifth.style.display = "block";
    }

    if (step) {
      step.innerHTML = "Step 5 of 5";
    }
  }

  async function submit() {
    // try {
    //   const resp = await fetch("http://localhost:5000/coursecreate", {
    //     method: "Post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: headers.email,
    //       pass: headers.pass,
    //       id: 0,
    //       title: title,
    //       field: field,
    //       hours: hours,
    //       price: price,
    //       image: image,
    //     }),
    //   });
    //   const data3 = await resp.json();
    //   if (resp.status == 200) {
    //     console.log("Course created");
    //   } else {
    //     console.log("Failed to create a course");
    //   }
    // } catch (error) {
    //   console.log("Error inncourse catch : ", error);
    // }
  }

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="s">
        <div className="s_nav1">
          <h2 className="s_h2">Step 1 of 4</h2>
          <button className="s_b1" onClick={exit}>
            Exit
          </button>
        </div>
        <div className="s1">
          <h4 className="s_h4">In which category your course is ?</h4>
          <h5 className="s_h5">
            If you're not sure about the right category, you can change it
            later.
          </h5>
          <select
            name="dropdown"
            id="dropdown"
            value={field}
            onChange={(e) => {
              setField(e.target.value);
            }}
          >
            <option value="Choose a category">Choose a category</option>
            <option value="Development">Development</option>
            <option value="Business">Business</option>
            <option value="Finance & Accounting">Finance & Accounting</option>
            <option value="IT & Software">IT & Software</option>
            <option value="Office Productivity">Office Productivity</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Photography & Video">Photography & Video</option>
            <option value="Health & Fitness">Health & Fitness</option>
            <option value="Music">Music</option>
            <option value="I don't know yet">I don't know yet</option>
          </select>
          <div className="s_buttons">
            <button className="s_b3 sb sb12" onClick={goToSec}>
              Next
            </button>
          </div>
        </div>

        {/* Second step */}

        <div className="s2">
          <h4 className="s_h4">What is the title of your course ?</h4>
          <h5 className="s_h5">
            It's ok if you can't think of a good title now. You can change it
            later.
          </h5>
          <input
            type="text"
            name="s_title"
            id="dropdown"
            maxLength={60}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="e.g. Learn Web3 from Scratch"
          />
          <div className="s_buttons">
            <button className="s_b2 sb" onClick={goToFir}>
              Previous
            </button>
            <button className="s_b3 sb" onClick={goToThi}>
              Next
            </button>
          </div>
        </div>

        {/* Third Step */}
        <div className="s3">
          <h4 className="s_h41 s_h4" style={{ marginTop: "18px" }}>
            How much time can you spend creating your course per week?
          </h4>
          <h5 className="s_h5 sh5 i3p">
            We can help you achieve your goals even if you don't have much time.
          </h5>

          <input
            type="text"
            name="s_title"
            id="dropdown"
            maxLength={60}
            onChange={(e) => {
              setHours(e.target.value);
            }}
            placeholder="min 3hrs/week"
            style={{ marginTop: "-3.2px" }}
          />
          <div className="s_buttons">
            <button className="s_b2 sb" onClick={goToSec}>
              Previous
            </button>
            <button className="s_b3 sb" onClick={goToFou}>
              Next
            </button>
          </div>
        </div>
        {/* Fourth Page */}

        <div className="s4">
          <h4 className="s_h4">What is the price of your course ?</h4>
          <h5 className="s_h5">
            How much does your course worth ? Is it Economy or Premium ?
          </h5>
          <input
            type="number"
            name="s_title"
            id="dropdown"
            maxLength={5}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="₹"
          />
          <div className="s_buttons">
            <button className="s_b2 sb" onClick={goToThi}>
              Previous
            </button>
            <button className="s_b3 sb" onClick={goToFif}>
              Next
            </button>
          </div>
        </div>

        {/* Fifth Block */}

        <div className="s5">
          <h4 className="s_h4">Upload a thumb-nail</h4>
          <h5 className="s_h5">Thumbnail for your course !</h5>
          <input
            type="file"
            name="image1"
            id="dropdown1"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <div className="s_buttons">
            <button className="s_b2 sb" onClick={goToFou}>
              Previous
            </button>
            <button className="s_b3 sb" onClick={submit}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1;
