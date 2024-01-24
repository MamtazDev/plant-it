import React from "react";
import Brands from "./Brands";

const Banner = () => {
  return (
    <div className="banner pt-[296px] pb-[63px]">
      <div className="container mx-auto">
        <p className="title mb-[272px] max-w-[1030px] mx-auto">
          Recruitment <span>specialists </span> 
          with a <span> conscience</span>{" "}
        </p>
        <Brands />
      </div>
    </div>
  );
};

export default Banner;
