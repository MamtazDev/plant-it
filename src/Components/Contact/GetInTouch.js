import React from "react";
import pic from "../../assets/contact.png";
import instagram from "../../assets/insta.png";
import linkedin from "../../assets/linked.png";
import telegram from "../../assets/tele.png";
import Link from "next/link";
import contactImg from "../../../public/contact-bg.png";

const GetInTouch = () => {
  return (
    <div
      className="px-[30px] contact text-center text-white pt-[198px] lg:pt-[258px] pb-[91px] lg:pb-[306px] "
      style={{ backgroundImage: `url(${contactImg.src})` }}
    >
      <div className="container mx-auto">
        <p className="subtitle text-center text-mint mb-[90px] lg:mb-[133px]">
          Get In <span>Touch</span>{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-[60px] lg:mb-[176px]">
          <div>
            <img src={pic.src} alt="" />
          </div>
          <div className="my-auto">
            <p className="text-mint text-[33px] lg:text-[52px] font-normal mb-[27px] lg:mb-[51px]">
              We’re all ears
            </p>
            <p className="text-2xl font-libre font-normal italic mb-3">
              Email us
            </p>
            <Link
              href="mailto:info@weareplan.it.com"
              className="text-[18px] lg:text-[22px] font-light mb-[26px] lg:mb-[51px]"
            >
              info@weareplan.it.com
            </Link>
            <p className="text-[24px] font-libre italic font-normal mb-4 lg:mb-[22px]">
              Find us on social
            </p>
            <div className="flex justify-center gap-[20px] items-center">
              <Link target="_blank" href="https://www.instagram.com/">
                <img
                  className="h-[35px] lg:h-auto"
                  src={instagram.src}
                  alt=""
                />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/">
                <img className="h-[35px] lg:h-auto" src={linkedin.src} alt="" />
              </Link>
              <Link target="_blank" href="https://web.telegram.org/a/">
                <img className="h-[35px] lg:h-auto" src={telegram.src} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="text-base lg:text-[24px] font-light mb-[51px] ">
            Et sagittis nec neque ut varius suspendisse. Bibendum etiam cursus
            leo aliquet venenatis diam lobortis nunc tristique. Nunc nulla neque
            lectus placerat aliquam odio. Amet cras vitae adipiscing egestas vel
            penatibus.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-[45px] lg:gap-[57px]">
            <button className="w-full lg:w-auto border-[2.5px] text-base lg:text-[24px] font-light rounded-[80px] border-offWhite py-[9px] lg:py-[13px] px-[31px] lg:px-[50px]">
              find out more about us
            </button>
            <button className="w-full lg:w-auto  border-[2.5px] text-deepBlue text-base lg:text-[24px] font-light rounded-[80px] border-offWhite bg-[#EBF2BD] py-[9px] lg:py-[13px] px-[31px] lg:px-[50px]">
              See all our roles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
