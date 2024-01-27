import React from "react";
import missionBgSm from "../../assets/missionSm.png";
import Carousel from "react-multi-carousel";

const MissionSlider = () => {
  const details = ["Planet over profit", "People first", "Keep it personal"];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mission px-[30px] lg:px-0 py-[90px] relative z-10">
      <img
        className="lg:hidden absolute top-0 left-0 -z-10"
        src={missionBgSm.src}
        alt=""
      />
      <div className="container mx-auto">
        <p className="subtitle text-offWhite mb-[50px] lg:mb-[116px]">
          We’re on a <span>mission</span>{" "}
        </p>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={true}
          arrows={false}
          className="pb-[37px] mb-[63px]"
        >
          {details.map((data, index) => (
            <div
              className="bg-white rounded-2xl px-[40px] lg:px-[55px] py-[46px] lg:py-[66px] text-[#132B51]"
              key={index}
            >
              <p className="text-[20px] lg:text-[32px] font-semibold capitalize mb-3 lg:mb-5">
                {data}
              </p>
              <p className="text-sm lg:text-xl font-light">
                Lorem ipsum dolor sit amet consectetur. Massa et aliquet aliquam
                vel eleifend sed. Feugiat netus ultricies laoreet at nunc vitae
                dui amet risus. Dictumst fermentum phasellus duis neque. Sed
                bibendum nunc ac fringilla.
              </p>
            </div>
          ))}
        </Carousel>

        <div className="text-center ">
          <button className="bg-lemon rounded-[80px] text-deepBlue text-base font-light capitalize py-[9px] px-[31px]">
            find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionSlider;
