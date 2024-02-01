import React from "react";
import GrowSlider from "./GrowSlider";
import growBg from "../../assets/want-bg.png";

const Grow = () => {
  return (
    <div
      style={{ backgroundImage: `url(${growBg.src})` }}
      className="grow px-[30px] pt-[79px] lg:pt-[170px] pb-[90px] lg:pb-[188px] "
    >
      <div className="container mx-auto">
        <div className="max-w-[760px] mb-[110px] lg:mb-[155px]">
          <p className="subtitle mb-[50px] lg:mb-[35px]">
            Want to grow <span>with us?</span>{" "}
          </p>
          <p className="text-base lg:text-[24px] font-fieldworkGeoLight font-light  leading-[160%]">
            Et sagittis nec neque ut varius suspendisse. Bibendum etiam cursus
            leo aliquet venenatis diam lobortis nunc tristique. Nunc nulla neque
            lectus placerat aliquam odio. Amet cras vitae adipiscing egestas vel
            penatibus.
            <br /> <br />
            Venenatis diam lobortis nunc tristique. Nunc nulla neque lectus
            placerat aliquam odio. Amet cras vitae adipiscing egestas vel
            penatibus.
          </p>{" "}
          <br /> <br />
          <button className="bg-lemon rounded-[80px] py-[9px] lg:py-[13px] px-[31px] lg:px-[50px] font-fieldworkGeoLight text-deepBlue text-base lg:text-[24px] font-light">
            Get in touch
          </button>
        </div>
      </div>
      <GrowSlider />
    </div>
  );
};

export default Grow;
