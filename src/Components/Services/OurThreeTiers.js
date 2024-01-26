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

const OurThreeTiers = () => {
  return (
    <section className="out_three_tiers py-[174px]">
      <div className="container">
        <div className="section_heading pb-[100px]">
          <h3 className="service_sub_heading text-[70px] font-fieldWorkGeoRegular text-[#132B51] text-center">
            Our three
            <span className="font-libre italic"> tiers </span>
          </h3>
        </div>

        <div className="tiers_wrapper flex gap-16">
          {TiesrsData.map((tiersItem, index) => (
            <div className="tiers_item py-[60px] px-[55px] bg-[#F4F8DA] rounded-[16px]" key={index}>
              <div clasName="tiers_head">
                <h3 className="text-[#0E203A] font-semibold text-[32px] capitalize font-fieldWorkGeoRegular pb-[16px]">
                  {tiersItem.tierTitle}
                </h3>
                <p className="text-[#0E203A] text-[20px] font-fieldworkGeoLight">
                  {tiersItem.tierDes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurThreeTiers;
