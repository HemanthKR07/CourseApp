import "../Styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";
import EmailVerification from "./EmailVerification";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="verification" element={<EmailVerification />} />
      </Routes>
    </>
  );
}

export default App;
