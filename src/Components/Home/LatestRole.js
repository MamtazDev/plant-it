import React from "react";
import latest1 from "../../assets/latest1.png";
import latest2 from "../../assets/latest2.png";
import latest3 from "../../assets/latest3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LatestRole = () => {
  const details = [
    {
      pic: latest1,
      designation: "Senior Front End Developer",
      name: "LAKA",
      date: "10/12/23",
    },
    {
      pic: latest2,
      designation: "Product Manager",
      name: "Wagestream",
      date: "7/12/23",
    },
    {
      pic: latest3,
      designation: "UX Designer",
      name: "Birdie",
      date: "12/12/23",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="latest_role bg-[#0E203A] pt-[170px] pb-[165px]">
      <div className="container mx-auto">
        <p className="subtitle text-[#B2DBBA] mb-[106px]">
          Latest <span>roles</span>{" "}
        </p>
        <div className="relative">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
          >
            {details.map((data, index) => (
              <div key={index} className="mr-[60px] text-white mb-[209px]">
                <img className="mb-10" src={data.pic.src} alt="" />
                <p className="text-[34px] font-normal capitalize mb-5">
                  {data.designation}
                </p>
                <p className="text-[26px] font-light mb-3">{data.name}</p>
                <p className="text-[22px] font-light">{data.date}</p>
              </div>
            ))}
          </Carousel>

          <button className="absolute bottom-0 left-0 border border-[#F7F4F0] rounded-[80px] py-[14px] px-[50px] text-[#F7F4F0] text-2xl font-normal">
            See all Open Roles
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestRole;
