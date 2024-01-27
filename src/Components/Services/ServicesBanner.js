// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

import Image from "next/image";
import compnayimg2 from "../../assets/birdie.png";
import compnayimg3 from "../../assets/dhl.png";
import compnayimg6 from "../../assets/inflow.png";
import compnayimg4 from "../../assets/laka.png";
import compnayimg1 from "../../assets/pvo.png";
import compnayimg5 from "../../assets/wagastream.png";
import ServiceBannerSlider from "./ServiceBannerSlider";
import serviceBg from "../../../public/termsandcareers-banner-img.png"

const ServicesBanner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    arrow: true,
  };

  return (
    // service
    <section className="" style={{backgroundImage:`url(${serviceBg.src})`}}>
      <div className="container">
        <div className="section_heading pb-[133px]">
          <p className="title pb-[133px]">
            Our <span>Team </span>
          </p>

          <h3 className="service_sub_heading text-[70px] font-fieldWorkGeoRegular text-white text-center">
            Because sometimes smaller <br />
            <span className="font-libre italic"> is mightier </span>
          </h3>
        </div>

        <div className="banner_slider pb-[180px]">
          {/* <div className="banner_img flex items-center justify-center mb-[70px]">
            <div className="banner_item">
              <Image src={sliderImgOne} />
            </div>
            <div className="banner_item">
              <Image src={sliderImgTwo} />
            </div>
            <div className="banner_item">
              <Image src={sliderImgThree} />
            </div>
          </div>

          <div className="image_title flex items-center justify-between mb-[27px]">
            <button className="left_arrow">
              <Image src={arrowLeft} />
            </button>

            <div className="title">
              <h2 className="text-[50px] font-semibold text-white">Title</h2>
            </div>

            <button className="right_arrow">
              <Image src={arrowRight} />
            </button>
          </div>

          <div className="description flex justify-center">
            <p className="text-white text-[24px] fieldworkGeoLight max-w-[803px]">
              Lorem ipsum dolor sit amet consectetur. Et sagittis nec neque ut
              varius suspendisse. Bibendum etiam cursus leo aliquet venenatis
              diam lobortis nunc tristique. Nunc nulla neque lectus placerat
              aliquam odio. Amet cras vitae adipiscing.
            </p>
          </div> */}

          <ServiceBannerSlider />
        </div>

        <div className="compnay_wrapper flex item justify-between pb-[63px]">
          <div className="company_item">
            <Image  src={compnayimg1} alt="compnay_img" />
          </div>
          <div className="company_item">
            <Image src={compnayimg2} alt="compnay_img" />
          </div>
          <div className="company_item">
            <Image src={compnayimg3} alt="compnay_img" />
          </div>
          <div className="company_item">
            <Image src={compnayimg4} alt="compnay_img" />
          </div>
          <div className="company_item">
            <Image src={compnayimg5} alt="compnay_img" />
          </div>
          <div className="company_item">
            <Image src={compnayimg6} alt="compnay_img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
