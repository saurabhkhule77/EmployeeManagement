import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Authentication = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Authentication;
