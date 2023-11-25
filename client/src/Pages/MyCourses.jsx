import { Link } from "react-router-dom";
function MyCourses() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
        {`
          .pc_nav{
              height:100px;
              width:1279px;
              margin-left:-40px;
              margin-top:-30px;
              background-color:white;
          }
          .pc_h3{
              font-family:Raleway;
              padding-top:25px;
              font-size:.8cm;
              font-weight:900;
          }
  
          .pc_body{
              background-color:white;
              margin-left:-40px;
          }
          #vB1{
            background-color:white;
        }
          `}
      </style>
      <div className="pc_blk">
        <div className="pc_nav">
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
          <h3 className="pc_h3">My Courses</h3>
        </div>
        <div className="pc_body">Shiva-gami</div>
      </div>
    </>
  );
}

export default MyCourses;
