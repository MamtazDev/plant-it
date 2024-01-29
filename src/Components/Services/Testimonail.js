import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import roundShape from "../../assets/roundShape.png";
import Carousel from "react-multi-carousel";

const Testimonail = () => {
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
    <section className="testimonial bg-[#0E203A] pt-[115px] md:pt-[183px] pb-[100px] md:pb-[163px] relative">
      <div className="absolute top-[-150px] left-[50%] translate-x-[-50%]">
        <Image src={roundShape} alt="roundshape" />
      </div>
      <div className="container mx-auto">
        <h3 className="service_sub_heading text-[30px] md:text-[70px] font-fieldWorkGeoRegular text-white text-center pb-[18px] md:pb-[98px]">
          Testimonials
        </h3>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={true}
          arrows={false}>
          {[1, 2, 3].map((index) => (
        <div className="slider_wrapper flex flex-col items-center pb-[50px] px-5 md:px-0">
          <div className="slider_item max-w-[1190px] border-b-2 border-b-[#EBF2BD] pb-[98px]">
            <p className="text-white text-center text-[18px] md:text-[30px] font-fieldworkGeoLight">
              “I spoke with 5 different companies and really felt like you
              actually understand software engineers vs the others which felt a
              bit more bland.
            </p>

            <p className="text-white text-center text-[18px] md:text-[30px] font-fieldworkGeoLight py-[30px]">
              Frequent communication that felt like you had considered all
              aspects of the hire. Not afraid to over communicate, which I
              loved.
            </p>

            <p className="text-white text-center text-[18px] md:text-[30px] font-fieldworkGeoLight">
              Always love a good personal touch in working with anyone so I
              wanted some aspect of that to come through. You are fun to work
              with, in addition to being effective.”
            </p>

          </div>

          <div className="designation_wrapper text-center pt-[40px] md:pt-[139px] pb-[40px] md:pb-[65px]">
            <h5 className="font-libre text-[18px] md:text-[30px] italic font-normal text-white">
              CTO
            </h5>

            <p className="font-libre text-[18px] md:text-[30px] italic font-normal text-white">
              London Tech Start-up
            </p>
          </div>
        </div>
        ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonail;
