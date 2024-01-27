import React from "react";
import want1 from "../../assets/want1.png";
import want2 from "../../assets/want2.png";
import want3 from "../../assets/want3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const GrowSlider = () => {
  const pics = [want1, want2, want3];
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
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        showDots={true}
        arrows={false}
      >
        {pics.map((data, index) => (
          <div
            key={index}
            className="flex items-start gap-[66px] pb-[51px] lg:pb-[122px] "
          >
            <img src={data.src} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GrowSlider;
