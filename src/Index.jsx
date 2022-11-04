import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import LoginScreen from "./components/auth/Login";
import Display from "./components/display/Display";
import Home from "./components/home/Home";
import Monitor from "./components/monitor/Monitor";
import "antd/dist/antd.css";

function Index() {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/display" element={<Display />}></Route>
        <Route path="/monitor" element={<Monitor />}></Route>
      </Route>
    </Routes>
  );
}

export default Index;
