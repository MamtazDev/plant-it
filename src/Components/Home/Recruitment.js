import React from "react";
import recruitment from "../../assets/recrutement.png";

const Recruitment = () => {
  return (
    <div className=" recruitment pt-[232px] pb-[248px] relative">
      <img
        className="absolute top-0 left-0 object-contain -z-10"
        src={recruitment.src}
        alt=""
      />
      <div className="container max-w-[970px] mx-auto">
        <p className="subtitle  mb-[103px]">
          The recruitment company that cares more about{" "}
          <span>people and planet</span> than profit.
        </p>
        <p className="text-2xl font-light text-[#0E203A] text-center">
          Lorem ipsum dolor sit amet consectetur. <br /> Et sagittis nec neque
          ut varius suspendisse. Bibendum etiam cursus leo aliquet venenatis
          diam lobortis nunc tristique. Nunc nulla neque lectus placerat aliquam
          odio. Amet cras vitae adipiscing egestas vel penatibus.
        </p>
      </div>
    </div>
  );
};

export default Recruitment;
