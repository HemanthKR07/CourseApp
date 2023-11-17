import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../Styles/App.css";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";
import EmailVerification from "./EmailVerification";
function App() {
  const [data, setData] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="signin" element={<SignIn sendData={setData} />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="verification"
          element={<EmailVerification receiveData={data} />}
        />
      </Routes>
    </>
  );
}

export default App;
