import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Designation = () => {
  const details = [
    "Software Engineering",
    "Product",
    "DevOps",
    "Data",
    "Testing & QA",
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="designation bg-mint py-[26px] lg:py-[65px] ">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        arrows={false}
      >
        {details.map((data, index) => (
          <div key={index}>
            <p className="text-[#132B51] text-[18px] lg:text-[34px] font-light text-center whitespace-nowrap">
              {data}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Designation;
