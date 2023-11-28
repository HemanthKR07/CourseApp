import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../Styles/App.css";
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Profile from "./Profile/Profile";
import PurchasePlus from "./Plus/PurchasePlus";
import LaunchC from "./LaunchCourses/LaunchC";
import Step1 from "./LaunchCourses/Step1";
import Search from "./BuyCourse/Search";
import PurchasedCourses from "./PurchasedCourses/PurchasedCourses";
import MyCourses from "./MyCourses/MyCourses";

function App() {
  const [data, setData] = useState("");
  function handleReceivedData(mail) {
    setData(mail);
  }
  return (
    <>
      <Routes>
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="home" element={<Home />} />

        <Route path="/" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="purchaseplus" element={<PurchasePlus />} />
        <Route path="launchcourse" element={<LaunchC />} />
        <Route path="createcourse" element={<Step1 />} />
        <Route path="search" element={<Search />} />
        <Route path="purchasedcourses" element={<PurchasedCourses />} />
        <Route path="myCourses" element={<MyCourses />} />
      </Routes>
    </>
  );
}

export default App;
