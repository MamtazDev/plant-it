import React from "react";
import plan from "../../assets/plan-lock.png";

const Mission = () => {
  const details = ["Planet over profit", "People first", "Keep it personal"];
  return (
    <div className="mission  pt-[168px] pb-[176px]">
      <div className="container mx-auto">
        <p className="subtitle text-[#F7F4F0] mb-[116px]">
          We’re on a <span>mission</span>{" "}
        </p>
        <div className="relative">
          <div className="grid grid-cols-3 gap-[57px] pb-[61px] ">
            {details.map((data, index) => (
              <div
                className="bg-white rounded-2xl px-[55px] py-[66px] text-[#132B51]"
                key={index}
              >
                <p className=" text-[32px] font-semibold capitalize mb-5">
                  {data}
                </p>
                <p className="text-xl font-light">
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
          <button className="bg-[#EBF2BD] rounded-[80px] text-[#0E203A] text-2xl font-light capitalize py-[14px] px-[50px]">
            find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
