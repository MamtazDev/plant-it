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
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="latest_role bg-deepBlue px-[30px] pt-[90px] lg:pt-[170px] pb-[85px] lg:pb-[165px]">
      <div className="container mx-auto">
        <p className=" subtitle text-mint -mb-10 lg:mb-[106px]">
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
              <div
                key={index}
                className="lg:mr-[60px] text-white mb-[66px] lg:mb-[209px]"
              >
                <img className="mb-10" src={data.pic.src} alt="" />
                <p className="text-[18px] lg:text-[34px] font-normal capitalize mb-3 lg:mb-5">
                  {data.designation}
                </p>
                <p className="text-sm lg:text-[26px] font-fieldworkGeoLight font-light mb-3">
                  {data.name}
                </p>
                <p className="text-xs lg:text-[22px] font-fieldworkGeoLight font-light">
                  {data.date}
                </p>
              </div>
            ))}
          </Carousel>

          <button className="lg:absolute bottom-0 left-0 border border-offWhite rounded-[80px] py-[9px] lg:py-[14px] px-[31px] lg:px-[50px] text-offWhite text-sm lg:text-2xl font-normal">
            See all Open Roles
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestRole;
