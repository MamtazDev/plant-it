import React from "react";
import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";
import linkedin from "@/assets/in.png";
import telegram from "@/assets/telegram.png";

const Teams = () => {
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
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px] text-center">
      {teams.map((data, index) => (
        <div>
          <div key={index} className="team_card  px-[53px] py-[82px] mb-[47px]">
            <div className="h-[376px] flex items-end">
              <img className="mx-auto mb-10" src={data.pic.src} alt="" />
            </div>
            <p className="text-mint text-[44px] font-semibold mb-3">
              {data.firstName}
              <span className="font-libre italic text-[42px] font-normal">
                {data.lastName}
              </span>
            </p>
            <p className="text-offWhite font-semibold text-[30px] mb-[30px]">
              {data.designation}
            </p>
            <div className="flex justify-center items-center gap-4 mb-[47px]">
              <img src={linkedin.src} alt="" />
              <img src={telegram.src} alt="" />
            </div>
            <p className="text-offWhite text-[20px] font-normal">
              Lorem ipsum dolor sit amet consectetur. Massa et aliquet aliquam
              vel eleifend sed. Feugiat netus ultricies laoreet at nunc vitae
              dui amet risus. Dictumst fermentum phasellus duis neque. Sed
              bibendum. <br /> <br />
              Lorem ipsum dolor sit amet consectetur. Massa et aliquet nunc ac
              fringilla.
            </p>
          </div>
          <div className="bg-mint text-deepBlue  rounded-2xl pr-[51px] pl-[55px] py-[58px]">
            <p className="text-[40px] font-semibold mb-5">
              Ask me{" "}
              <span className="font-libre italic text-[38px] font-normal">
                about
              </span>
            </p>
            <p className="text-[20px] font-normal">
              Lorem ipsum dolor sit amet consectetur. Massa et aliquet aliquam
              vel eleifend sed. Feugiat netus ultricies laoreet at nunc vitae
              dui amet risus. Dictumst fermentum phasellus duis neque.{" "}
            </p>
          </div>
        </div>
      ))}
      <div className="relative top-[21%]">
        <div className="border-2 rounded-2xl border-[#EBF2BD] text-white pr-[51px] pl-[55px] pt-[86px] pb-[228px]">
          <p className="subtitle mb-[28px]">
            We’re <br /> <span>Hiring</span>{" "}
          </p>
          <p className="text-[20px] font-light">
            Lorem ipsum dolor sit amet consectetur. Massa et aliquet aliquam vel
            eleifend sed. Feugiat netus ultricies laoreet at nunc vitae dui amet
            risus.
            <br /> <br />
            Aliquet aliquam vel eleifend sed. Feugiat netus ultricies laoreet at
            nunc vitae dui ame.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
