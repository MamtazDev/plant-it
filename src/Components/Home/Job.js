import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Job = () => {
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
    <div className="job px-[30px] pt-[135px] lg:pt-[337px] pb-[90px] lg:pb-[211px] text-deepBlue">
      <div className="container mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={true}
          arrows={false}
        >
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex flex-col-reverse lg:flex-row items-start gap-10 lg:gap-[66px] pb-[62px] lg:pb-[122px]"
            >
              <div className="flex-shrink-0 mx-auto">
                <p className="text-[18px] lg:text-[34px] font-fieldworkGeoBold font-semibold mb-[1px] lg:mb-1 ">
                  Job Tile
                </p>
                <p className="text-sm lg:text-[30px] font-light font-fieldworkGeoLight  ">Industry</p>
              </div>
              <p
                style={{ borderColor: "rgba(19, 43, 81, 0.21)" }}
                className="text-center lg:text-start border-b-2 lg:border-b-0 lg:border-l-4 pb-[40px] lg:pb-0 lg:ps-[66px] text-[22px] lg:text-[40px] font-normal"
              >
                “Plan:it 'get' engineers. They’re not only adept at sourcing
                top-notch talent but also{" "}
                <span className="font-libre text-[22px] lg:text-[38px] italic ">
                  {" "}
                  possess a deep understanding of their mindset and needs.
                </span>
                ”
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Job;
