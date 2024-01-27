import React from "react";
import recruitment from "../../assets/recrutement.png";
import recruitmentSm from "../../assets/recrutement-sm.png";

const Recruitment = () => {
  return (
    <div className="px-[30px] lg-px-0 recruitment pt-[85px] lg:pt-[232px] pb-[90px] lg:pb-[248px] relative">
      <img
        className="hidden lg:block absolute top-0 left-0 object-contain -z-10"
        src={recruitment.src}
        alt=""
      />
      <img
        className="lg:hidden absolute top-0 left-0 object-contain -z-10"
        src={recruitmentSm.src}
        alt=""
      />
      <div className="container max-w-[970px] mx-auto">
        <p
          className="subtitle
        text-start lg:text-center mb-[31px] lg:mb-[103px] text-deepBlue"
        >
          The recruitment company that cares more about{" "}
          <span>people and planet</span> than profit.
        </p>
        <p className="text-base lg:text-2xl font-light text-deepBlue text-center">
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
