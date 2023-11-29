import "../App.css";
import Nav from "./Nav/Nav";
import M1 from "./M1";
import M2 from "./M2";
import M3 from "./M3";
import M4_lo from "./M4_lo";
import Foot from "../Foot/Foot";
function Home() {
  // const data = fetch("http://localhost:5000/help", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // const token = req.header("Authorization").split(" ")[1];
  return (
    <>
      <Nav />
      <M1 />
      <M2 />
      <M3 />
      <M4_lo />
      <Foot />
    </>
  );
}

export default Home;

// #menu_item:hover:after {
//   content: '';
//   position: fixed;
//   top: var( --menu-height);
//   left: 0;
//   height: 100vh;
//   width: 100vw;
//   background-color: black;
//   opacity: 0.5;
//   /* Ensure z-index is higher than page's content/data items */
//   z-index: 2
// }
