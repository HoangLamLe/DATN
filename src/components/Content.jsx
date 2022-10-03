import React from "react";
import { Route, Routes } from "react-router-dom";

import Display from "./display/Display";
import Home from "./home/Home";
import Monitor from "./monitor/Monitor";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/display" element={<Display />}></Route>
      <Route path="/monitor" element={<Monitor />}></Route>
    </Routes>
  );
}

export default Content;
