import React from "react";
import Swim from "../../assets/swimming.png";
import Play from "../../assets/playground.png";
import Class from "../../assets/class.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img className="w-full" src={Swim} alt="" />
        <img className="w-full" src={Class} alt="" />
        <img className="w-full" src={Play} alt="" />
      </div>
    </div>
  );
};

export default QZone;
