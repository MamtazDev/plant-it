import React from "react";
import pic from "../../assets/contact.png";
import instagram from "../../assets/insta.png";
import linkedin from "../../assets/linked.png";
import telegram from "../../assets/tele.png";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <div className="contact text-center text-white pt-[258px] pb-[306px]">
      <div className="container mx-auto">
        <p className="subtitle text-center text-mint mb-[133px]">
          Get In <span>Touch</span>{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-[176px]">
          <div>
            <img src={pic.src} alt="" />
          </div>
          <div className="my-auto">
            <p className="text-mint text-[52px] font-normal mb-[51px]">
              We’re all ears
            </p>
            <p className=" font-libre font-normal italic mb-3">Email us</p>
            <Link
              href="mailto:info@weareplan.it.com"
              className=" text-[22px] font-light mb-[51px]"
            >
              info@weareplan.it.com
            </Link>
            <p className="text-[24px] font-libre italic font-normal mb-[22px]">
              Find us on social
            </p>
            <div className="flex justify-center gap-[20px] items-center">
              <Link target="_blank" href="https://www.instagram.com/">
                <img src={instagram.src} alt="" />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/">
                <img src={linkedin.src} alt="" />
              </Link>
              <Link target="_blank" href="https://web.telegram.org/a/">
                <img src={telegram.src} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[24px] font-light mb-[51px] ">
            Et sagittis nec neque ut varius suspendisse. Bibendum etiam cursus
            leo aliquet venenatis diam lobortis nunc tristique. Nunc nulla neque
            lectus placerat aliquam odio. Amet cras vitae adipiscing egestas vel
            penatibus.
          </p>

          <div className="flex items-center justify-center gap-[57px]">
            <button className="border-[2.5px] text-[24px] font-light rounded-[80px] border-offWhite py-[13px] px-[50px]">
              find out more about us
            </button>
            <button className=" border-[2.5px] text-deepBlue text-[24px] font-light rounded-[80px] border-offWhite bg-[#EBF2BD] py-[13px] px-[50px]">
              See all our roles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
