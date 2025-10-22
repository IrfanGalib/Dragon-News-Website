import React from "react";
import SocialLogin from "../SocialLogin";
import Findus from "./Findus";
import QZone from "./QZone";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin></SocialLogin>
      <Findus></Findus>
      <QZone></QZone>
    </div>
  );
};

export default RightAside;
