import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../Styles/App.css";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";
import PurchasePlus from "./PurchasePlus";
import LaunchC from "./LaunchC";
import Step1 from "./Step1";

function App() {
  const [data, setData] = useState("");
  function handleReceivedData(mail) {
    setData(mail);
  }
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="home" element={<Home />} />

        <Route
          path="signin"
          element={<SignIn sendData={handleReceivedData} />}
        />
        <Route path="profile" element={<Profile />} />
        <Route path="purchaseplus" element={<PurchasePlus />} />
        <Route path="launchcourse" element={<LaunchC />} />
        <Route path="createcourse" element={<Step1 />} />
      </Routes>
    </>
  );
}

export default App;
