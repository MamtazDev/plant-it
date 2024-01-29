
import ServiceBannerSlider from "./ServiceBannerSlider";
import serviceBg from "../../../public/termsandcareers-banner-img.png"
import Marquee from "react-fast-marquee";
import ServiceMarquee from "./ServiceMarquee";

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
    <section className="" style={{ backgroundImage: `url(${serviceBg.src})` }}>
      <div className="container">
        <div className="section_heading pt-[200px] md:pt-[220px] pb-[90px] md:pb-[133px]">
          <p className="title pb-[47px] md:pb-[150px]">
            Our <span>Services </span>
          </p>

          <h3 className="service_sub_heading text-[30px] md:text-[70px] font-fieldWorkGeoRegular text-white text-center">
            Because sometimes smaller <br className={"hidden lg:block"} />
            <span className="font-libre italic"> is mightier </span>
          </h3>
        </div>

        <div className="banner_slider pb-[120px] md:pb-[200px] flex flex-col items-center">
          <ServiceBannerSlider />
        </div>

        <div className="compnay_wrapper pb-[63px]">
          <Marquee pauseOnHover={true }>
              <ServiceMarquee/>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
