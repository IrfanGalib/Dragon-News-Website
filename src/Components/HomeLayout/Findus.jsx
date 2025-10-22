import React from "react";
import fb from "../../assets/fb.png";
import Twitter from "../../assets/twitter.png";
import Insta from "../../assets/instagram.png";

const Findus = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>

      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item bg-white justify-start">
            {" "}
            <img className="mr-4" src={fb} alt="" /> Facebook
          </button>
          <button className="btn join-item bg-white justify-start">
            {" "}
            <img className="mr-3" src={Twitter} alt="" /> Twitter
          </button>
          <button className="btn join-item bg-white justify-start">
            {" "}
            <img className="mr-3" src={Insta} alt="" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Findus;
