import React from "react";
import plan from "../../assets/plan-lock.png";
import missionBg from "../../assets/mission.png";


const Mission = () => {
  const details = ["Planet over profit", "People first", "Keep it personal"];
  return (
    <div className="mission px-[30px]  pt-[90px] lg:pt-[168px] pb-[176px] relative z-10">
      <img
        className="block absolute top-0 right-1/4 -z-10"
        src={missionBg.src}
        alt=""
      />

      <div className="container mx-auto">
        <p className="subtitle text-offWhite mb-[50px] lg:mb-[116px]">
          We’re on a <span>mission</span>{" "}
        </p>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[57px] pb-[61px] ">
            {details.map((data, index) => (
              <div
                className="bg-white rounded-2xl px-[40px] lg:px-[55px] py-[46px] lg:py-[66px] text-[#132B51]"
                key={index}
              >
                <p className="text-[20px] lg:text-[32px] font-semibold capitalize mb-3 lg:mb-5">
                  {data}
                </p>
                <p className="text-sm lg:text-xl font-light">
                  Lorem ipsum dolor sit amet consectetur. Massa et aliquet
                  aliquam vel eleifend sed. Feugiat netus ultricies laoreet at
                  nunc vitae dui amet risus. Dictumst fermentum phasellus duis
                  neque. Sed bibendum nunc ac fringilla.
                </p>
              </div>
            ))}
          </div>
          <img className="absolute bottom-0 left-[20%]" src={plan.src} alt="" />
        </div>

        <div className="text-end">
          <button className="bg-lemon rounded-[80px] text-deepBlue text-2xl font-light capitalize py-[14px] px-[50px]">
            find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
