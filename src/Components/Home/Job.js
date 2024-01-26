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
    <div className="job pt-[337px] pb-[211px] text-[#0E203A]">
      <div className="container mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={true}
          arrows={false}>
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex items-start gap-[66px] pb-[122px]">
              <div className="flex-shrink-0">
                <p className="text-[34px] font-semibold mb-1 ">Job Tile</p>
                <p className="text-[30px] font-light  ">Industry</p>
              </div>
              <p
                style={{ borderColor: "rgba(19, 43, 81, 0.21)" }}
                className="border-l-[4px] ps-[66px] text-[40px] font-normal">
                “Plan:it 'get' engineers. They’re not only adept at sourcing
                top-notch talent but also{" "}
                <span className="font-libre text-[38px] italic ">
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
