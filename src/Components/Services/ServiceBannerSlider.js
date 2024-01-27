import { useRef, useState } from "react";
import SwiperCore, {
  Coverflow,
  EffectZoom,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import sliderImgThree from "../../assets/image-right.png";
import sliderImgTwo from "../../assets/image_large.png";
import sliderImgOne from "../../assets/image_left.png";
// import { EffectCoverflow, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, EffectZoom, Coverflow, Pagination]);

const ServiceBannerSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

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

  const handleSlideChange = () => {
    if (swiper) {
      setActiveIndex(swiper.realIndex);
    }
  };

  const handleSlideChangeTransitionEnd = () => {
    if (swiper) {
      setActiveIndex(swiper.realIndex);
    }
  };

  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"4"}
        coverflow={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // modules={[EffectCoverflow, Pagination, Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="banner_img flex items-center justify-center mb-[70px]">
              <div className="banner_item">
                <img src={img.src} alt={`Slider ${index + 1}`} />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="image_title flex items-center justify-between mb-[27px]">
          <button className="left_arrow" onClick={handlePrev}>
            <img src={arrowLeft.src} alt="Left Arrow" />
          </button>

          <div className="title">
            <h2 className="text-[50px] font-semibold text-white">
              {titles[activeIndex]}
            </h2>
          </div>

          <button className="right_arrow" onClick={handleNext}>
            <img src={arrowRight.src} alt="Right Arrow" />
          </button>
        </div>

        <div className="description flex justify-center">
          <p className="text-white text-[24px] fieldworkGeoLight max-w-[803px]">
            {descriptions[activeIndex]}
          </p>
        </div>
      </Swiper>
    </>
  );
};

export default ServiceBannerSlider;
