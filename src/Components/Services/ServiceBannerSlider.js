import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectZoom } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/effect-zoom";

// Import your images and arrows
import sliderImgOne from "../../assets/image_left.png";
import sliderImgTwo from "../../assets/image_large.png";
import sliderImgThree from "../../assets/image-right.png";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";

// Initialize Swiper core
SwiperCore.use([Navigation, EffectZoom]);

const ServiceBannerSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const images = [sliderImgOne, sliderImgTwo, sliderImgThree];
  const titles = ["Title 1", "Title 2", "Title 3"];
  const descriptions = [
    "Description for slide 1.",
    "Description for slide 2.",
    "Description for slide 3.",
  ];

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <>
      {/* ... Other slider components */}
      <Swiper navigation={{ prevEl: ".left_arrow", nextEl: ".right_arrow" }} effect="zoom" zoom={{ maxRatio: 2 }} onSwiper={setSwiper}>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="banner_img flex items-center justify-center mb-[70px]">
              <div className="banner_item">
                <img src={img.src} alt={`Slider ${index + 1}`} />
              </div>
            </div>

            <div className="image_title flex items-center justify-between mb-[27px]">
              <button className="left_arrow" onClick={handlePrev}>
                <img src={arrowLeft.src} alt="Left Arrow" />
              </button>
              <div className="title">
                <h2 className="text-[50px] font-semibold text-white">
                  {titles[index]}
                </h2>
              </div>
              <button className="right_arrow" onClick={handleNext}>
                <img src={arrowRight.src} alt="Right Arrow" />
              </button>
            </div>

            <div className="description flex justify-center">
              <p className="text-white text-[24px] fieldworkGeoLight max-w-[803px]">
                {descriptions[index]}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ServiceBannerSlider;
