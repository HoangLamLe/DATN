import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import LoginScreen from "./components/auth/Login";
import Display from "./components/display/Display";
import Home from "./components/home/Home";
import Monitor from "./components/monitor/Monitor";
import Viewer from "./components/viewer/Viewer";
import "antd/dist/antd.css";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./components/notFound/NotFound";
import UnAuth from "./components/unAuth/UnAuth";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />}></Route>
      <Route path="/viewer" element={<Viewer />}></Route>
      <Route
        element={
          <PrivateRoute>
            <App />
          </PrivateRoute>
        }
      >
        <Route path="/home" element={<Home />}></Route>
        <Route path="/display" element={<Display />}></Route>
        <Route path="/monitor" element={<Monitor />}></Route>
      </Route>
      <Route path="/unauth" element={<UnAuth />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Index;
