import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils";

function PrivateRoute({ children }) {
  let role = getLocalStorage("role");
  if (role === "admin") {
    return children;
  } else {
    return <Navigate to={"/unauth"} replace />;
  }
}

export default PrivateRoute;
