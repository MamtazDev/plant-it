import React from "react";
import community from "../../assets/community.png";

const Community = () => {
  return (
    <div className="community px-[30px] pt-[90px] lg:pt-[194px] pb-[90px] lg:pb-[185px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="lg:hidden subtitle text-deepBlue mb-[44px]">
              Part of the <span>community</span>{" "}
            </p>
            <img src={community.src} alt="" />
          </div>
          <div>
            <p className="hidden lg:block subtitle text-deepBlue mb-[47px]">
              Part of the <br /> <span>community</span>{" "}
            </p>
            <p className="text-deepBlue text-base lg:text-2xl font-light mb-10 lg:mb-[73px]  leading-[160%]">
              Will is also the proud co-founder of London.js, a collaborative
              London JavaScript community. <br /> <br />
              Learn, Share, Use JavaScript as we collaborate as a London
              JavaScript community. Bring your questions, your code, and your
              desire to help. <br /> <br />
              The sessions are informal, friendly, and organised with a loose
              agenda. Mix with fellow JavaScript developers, get learning and
              start coding.
            </p>

            <button className="text-deepBlue text-[15px] lg:text-2xl font-semibold capitalize px-[31px] lg:px-[50px] py-[9px] lg:py-[14px] bg-mint rounded-[80px]">
              Join Us at a meetup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
