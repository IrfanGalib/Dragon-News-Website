import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex bg-base-200 gap-3 p-3 items-center">
      <p className="text-white bg-secondary p-2">Latest</p>
      <Marquee pauseOnHover={true} speed={60}>
        <p className="font-bold text-primary mr-6">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>

        <p className="font-bold text-primary mr-6">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <br />
        <p className="font-bold text-primary mr-6">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
