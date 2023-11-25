import SearchNav from "./SearchNav";
import { Link } from "react-router-dom";
function Search() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
        {`
          #vB1{
            background-color:white;
          }
          .search_nav{
            height:100px;
            background-color:White;
            width:1279px;
            margin-top:-40px;
            margin-left:-40px;
          }
          .block{
            height:500px;
            background-color:white;
            margin-top:0px;
            width:1279px;
            margin-left:-40px;
          }
          .search_h3{
            font-family:Raleway;
            font-size:.9cm;
            padding-top:30px;
          }

          #dropdown{
            margin-top:60px;
            // margin-left:-600px;
          }

          .search_button{
            margin-top:40px;
            font-family:Raleway;
            padding:5px 10px;
            font-size:.57cm;
            background-color:black;
            color:white;
            border:1px solid black;
            cursor:pointer;
            border-radius:3px;
          }
          .search_button:hover{
            background-color:white;
            color:black;
          }
        `}
      </style>
      <div className="search_nav">
        <Link to="/home">
          <button id="vB1" style={{ marginTop: "1px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
        </Link>
        <h3 className="search_h3">What do you want to learn ?</h3>
      </div>
      <div className="block">
        <select name="dropdown" id="dropdown">
          <option value="Choose a category">Choose a category</option>
          <option value="Development">Development</option>
          <option value="Health & Fitness">Health & Fitness</option>
          <option value="Business">Business</option>
          <option value="Finance & Accounting">Finance & Accounting</option>
          <option value="IT & Software">IT & Software</option>
          <option value="Design">Design</option>
        </select>
        <br />
        <button className="search_button">Search</button>
      </div>
    </>
  );
}

export default Search;
