import React from "react";
import Brands from "./Brands";

const Banner = () => {
  return (
    <div className="banner pt-[296px] pb-[63px]">
      <div className="container mx-auto">
        <p className="title mb-[272px]">
          Recruitment <span>specialists</span> <br />
          with a <span>conscience</span>{" "}
        </p>
        <Brands />
      </div>
    </div>
  );
};

export default Banner;
