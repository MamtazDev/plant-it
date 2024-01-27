import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";
import linkedin from "@/assets/in.png";
import telegram from "@/assets/telegram.png";

const TeamSlider = () => {
  const teams = [
    {
      pic: team1,
      firstName: "Elliott ",
      lastName: "Burrows",
      designation: "Co-Founder",
    },
    {
      pic: team2,
      firstName: "Will",
      lastName: "Laing",
      designation: "Co-Founder",
    },
    {
      pic: team3,
      firstName: "Jane ",
      lastName: "Doe",
      designation: "Recruiter",
    },
  ];
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
    <Carousel
      className="pb-[60px]"
      responsive={responsive}
      infinite={true}
      //   autoPlay={true}
      autoPlaySpeed={2000}
      showDots={true}
      arrows={false}
    >
      {teams.map((data, index) => (
        <div>
          <div
            key={index}
            className="team_card  px-[53px] py-[31px] lg:py-[82px] mb-[24px] lg:mb-[47px]"
          >
            <div className="h-auto lg:h-[376px] flex items-end">
              <img className="mx-auto mb-10" src={data.pic.src} alt="" />
            </div>
            <p className="text-mint text-[22px] lg:text-[44px] font-semibold mb-2 lg:mb-3">
              {data.firstName}
              <span className="font-libre italic text-[22px] lg:text-[42px] font-normal">
                {data.lastName}
              </span>
            </p>
            <p className="text-offWhite font-semibold text-base lg:text-[30px] mb-6 lg:mb-[30px]">
              {data.designation}
            </p>
            <div className="flex justify-center items-center gap-4 mb-[23px] lg:mb-[47px]">
              <img className="h-[35px] lg:h-auto" src={linkedin.src} alt="" />
              <img className="h-[35px] lg:h-auto" src={telegram.src} alt="" />
            </div>
            <p className="text-offWhite text-sm lg:text-[20px] font-normal">
              Lorem ipsum dolor sit amet consectetur. Massa et aliquet aliquam
              vel eleifend sed. Feugiat netus ultricies laoreet at nunc vitae
              dui amet risus. Dictumst fermentum phasellus duis neque. Sed
              bibendum. <br /> <br />
              Lorem ipsum dolor sit amet consectetur. Massa et aliquet nunc ac
              fringilla.
            </p>
          </div>
          <div className="bg-mint text-deepBlue  rounded-2xl  px-[28px] lg:pr-[51px] lg:pl-[55px] py-[34px] lg:py-[58px]">
            <p className="text-[22px] lg:text-[40px] font-semibold mb-4 lg:mb-5">
              Ask me{" "}
              <span className="font-libre italic text-[20px] lg:text-[38px] font-normal">
                about
              </span>
            </p>
            <p className="text-sm lg:text-[20px] font-normal">
              Lorem ipsum dolor sit amet consectetur. Massa et aliquet aliquam
              vel eleifend sed. Feugiat netus ultricies laoreet at nunc vitae
              dui amet risus. Dictumst fermentum phasellus duis neque.{" "}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TeamSlider;
