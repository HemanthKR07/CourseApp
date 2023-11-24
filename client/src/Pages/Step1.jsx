import React from "react";
import "../Styles/Step1.css";
function Step1() {
  function exit() {
    window.location.href = "/home";
  }

  const first = document.querySelector(".s1");
  const second = document.querySelector(".s2");
  const third = document.querySelector(".s3");
  const fourth = document.querySelector(".s4");

  const step = document.querySelector(".s_h2");

  function goToSec() {
    first.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    second.style.display = "block";

    step.innerHTML = "Step 2 of 4";
  }

  function goToThi() {
    first.style.display = "none";
    second.style.display = "none";
    fourth.style.display = "none";
    third.style.display = "block";

    step.innerHTML = "Step 3 of 4";
  }

  function goToFou() {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";

    step.innerHTML = "Step 4 of 4";
  }

  function goToFir() {
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    first.style.display = "block";

    step.innerHTML = "Step 1 of 4";
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
          <select name="dropdown" id="dropdown">
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
          <h4 className="s_h4">
            How much time can you spend creating your course per week?
          </h4>
          <h5 className="s_h5 sh5">
            It's ok if you can't think of a good title now. You can change it
            later.There's no wrong answer. We can help you achieve your goals
            even if you don't have much time.
          </h5>

          <div className="inps">
            <input type="radio" id="vb" name="hours" value="VB" />
            <label htmlFor="vb">Very busy right now - 2 hrs</label>
            <br />
            <br />

            <input type="radio" id="bit" name="hours" value="Bit" />
            <label htmlFor="bit">Can work a bit - 4 hrs</label>
            <br />
            <br />

            <input type="radio" id="flex" name="hours" value="flex" />
            <label htmlFor="flex">Have flexible time - 5+</label>
            <br />
            <br />

            <input type="radio" id="nd" name="hours" value="nd" />
            <label htmlFor="nd">I haven't decided the time</label>
          </div>

          <div className="s_buttons">
            <button className="s_b2 sb" onClick={goToSec}>
              Previous
            </button>
            <button className="s_b3 sb" onClick={goToFou}>
              Next
            </button>
          </div>
        </div>
        <div className="s4">
          <h4 className="s_h4">What i 4?</h4>
          <h5 className="s_h5">
            It's ok if you can't think of a good title now. You can change it
            later.
          </h5>
          <input
            type="text"
            name="s_title"
            id="dropdown"
            maxLength={60}
            placeholder="e.g. Learn Web3 from Scratch"
          />
          <div className="s_buttons">
            <button className="s_b2 sb" onClick={goToThi}>
              Previous
            </button>
            <button className="s_b3 sb" onClick={goToFir}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1;
