import React from "react";
import community from "../../assets/community.png";

const Community = () => {
  return (
    <div className="community pt-[194px] pb-[185px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={community.src} alt="" />
          </div>
          <div>
            <p className="subtitle text-[#0E203A] mb-[47px]">
              Part of the <br /> <span>community</span>{" "}
            </p>
            <p className="text-[#0E203A] text-2xl font-light mb-[73px]">
              Will is also the proud co-founder of London.js, a collaborative
              London JavaScript community. <br /> <br />
              Learn, Share, Use JavaScript as we collaborate as a London
              JavaScript community. Bring your questions, your code, and your
              desire to help. <br /> <br />
              The sessions are informal, friendly, and organised with a loose
              agenda. Mix with fellow JavaScript developers, get learning and
              start coding.
            </p>

            <button className="text-[#0E203A] text-2xl font-semibold capitalize px-[50px] py-[14px] bg-[#B2DBBA] rounded-[80px]">
              Join Us at a meetup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
