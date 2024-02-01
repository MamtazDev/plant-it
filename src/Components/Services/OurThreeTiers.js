import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurThreeTiers = () => {
  const TiesrsData = [
    {
      tierTitle: "Tier 1",
      tierDes:
        "Lorem ipsum dolor sit amet consectetur. Massa et aliquet aliquam vel eleifend sed. Feugiat netus ultricies laoreet at nunc vitae dui amet risus. Dictumst fermentum phasellus duis neque. Sed bibendum nunc ac fringilla.",
    },
    {
      tierTitle: "Tier 2",
      tierDes:
        "Lorem ipsum dolor sit amet consectetur. Massa et aliquet aliquam vel eleifend sed. Feugiat netus ultricies laoreet at nunc vitae dui amet risus. Dictumst fermentum phasellus duis neque. Sed bibendum nunc ac fringilla.",
    },
    {
      tierTitle: "Tier 3",
      tierDes:
        "Lorem ipsum dolor sit amet consectetur. Massa et aliquet aliquam vel eleifend sed. Feugiat netus ultricies laoreet at nunc vitae dui amet risus. Dictumst fermentum phasellus duis neque. Sed bibendum nunc ac fringilla.",
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
    <section className="out_three_tiers px-5 md:px-0 py-[80px] pb-[160px] md:py-[174px]">
      <div className="container">
        <div className="section_heading pb-[50px] md:pb-[100px]">
          <h3 className="service_sub_heading text-[28px] md:text-[70px]  text-[#132B51] text-start md:text-center">
            Our three
            <span className="font-libre italic"> tiers </span>
          </h3>
        </div>

        <div className="tiers_wrapper relative">
          <Carousel
            responsive={responsive}
            infinite={true}
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {TiesrsData.map((tiersItem, index) => (
              <div
                className="tiers_item py-[46px] md:py-[60px] px-[40px] md:px-[55px] bg-[#F4F8DA] rounded-[16px] mr-0 lg:mr-10"
                key={index}
              >
                <div clasName="tiers_head">
                  <h3 className="text-[#0E203A] font-fieldworkGeoBold font-semibold text-[22px] md:text-[32px] capitalize font-fieldWorkGeoRegular pb-[16px]">
                    {tiersItem.tierTitle}
                  </h3>
                  <p className="text-[#0E203A] text-[14px] md:text-[20px] font-fieldworkGeoLight">
                    {tiersItem.tierDes}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurThreeTiers;
