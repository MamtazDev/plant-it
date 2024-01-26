import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Image from "next/image";
import compnayimg2 from "../../assets/birdie.png";
import compnayimg3 from "../../assets/dhl.png";
import compnayimg6 from "../../assets/inflow.png";
import compnayimg4 from "../../assets/laka.png";
import compnayimg1 from "../../assets/pvo.png";
import compnayimg5 from "../../assets/wagastream.png";

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
    <section className="service">
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

        <div className="banner_slider"></div>

        <div className="compnay_wrapper flex item justify-between">
          <div className="company_item">
            <Image src={compnayimg1} alt="compnay_img" />
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
