import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  return (
    <div>
      <Navigate to={"/"}></Navigate>
    </div>
  );
};

export default Home;
