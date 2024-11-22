import React from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div className="container">
      <div className="subContainer">
        <LeftContainer />
        <RightContainer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
