import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUP from "./pages/SignUP";
import Headers from "./components/Headers";

const App = () => {
  return (
    <BrowserRouter>
    <Headers/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUP />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
