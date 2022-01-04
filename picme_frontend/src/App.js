import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import UpdatePin from "./components/UpdatePin";
import About from "./container/About";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="update-pin" element={<UpdatePin />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default App;
