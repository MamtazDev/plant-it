import React from "react";
import Brands from "./Brands";
import bannerBg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerBg.src})` }}
      className="px-[30px] banner pt-[198px] lg:pt-[296px] pb-[35px] lg:pb-[63px]"
    >
      <div className="container mx-auto">
        <p className="title mb-[134px] lg:mb-[272px] max-w-[1030px] mx-auto">
          Recruitment <span>specialists </span>
          with a <span> conscience</span>{" "}
        </p>
        <Brands />
      </div>
    </div>
  );
};

export default Banner;
