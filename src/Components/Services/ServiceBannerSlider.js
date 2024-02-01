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
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  default as sliderImgThree,
  default as sliderImgTwo,
} from "../../../public/image_large.png";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import sliderImgFour from "../../assets/image-right.png";
import {
  default as sliderImgFive,
  default as sliderImgOne,
} from "../../assets/image_left.png";

SwiperCore.use([Coverflow, EffectZoom, Pagination, Navigation]);

const ServiceBannerSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const images = [
    sliderImgOne,
    sliderImgTwo,
    sliderImgThree,
    sliderImgFour,
    sliderImgFive,
  ];
  const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"];
  const descriptions = [
    "Lorem ipsum dolor sit amet consectetur. Et sagittis nec neque ut varius suspendisse. Bibendum etiam cursus leo aliquet venenatis diam lobortis nunc tristique. Nunc nulla neque lectus placerat aliquam odio. Amet cras vitae adipiscing.",
    "Lorem ipsum dolor sit amet consectetur. Et sagittis nec neque ut varius suspendisse. Bibendum etiam cursus leo aliquet venenatis diam lobortis nunc tristique. Nunc nulla neque lectus placerat aliquam odio. Amet cras vitae adipiscing.",
    "Lorem ipsum dolor sit amet consectetur. Et sagittis nec neque ut varius suspendisse. Bibendum etiam cursus leo aliquet venenatis diam lobortis nunc tristique. Nunc nulla neque lectus placerat aliquam odio. Amet cras vitae adipiscing.",
    "Lorem ipsum dolor sit amet consectetur. Et sagittis nec neque ut varius suspendisse. Bibendum etiam cursus leo aliquet venenatis diam lobortis nunc tristique. Nunc nulla neque lectus placerat aliquam odio. Amet cras vitae adipiscing.",
    "Lorem ipsum dolor sit amet consectetur. Et sagittis nec neque ut varius suspendisse. Bibendum etiam cursus leo aliquet venenatis diam lobortis nunc tristique. Nunc nulla neque lectus placerat aliquam odio. Amet cras vitae adipiscing.",
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
      console.log("swipper", swiper);
    }
  };

  return (
    <>
      <Swiper
        className="swiper-container"
        style={{ width: "100%", height: "100%" }}
        effect={"zoom"}
        loop={true}
        slidesPerView={2}
        centeredSlides={true}
        centeredSlidesBounds={true}
        centeredSlidesOffset={0}
        coverflow={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner_img mb-[70px] flex justify-center"
              style={{
                transform: `scale(${activeIndex === index ? 1.2 : 1})`,
                transition: "transform 0.3s",
              }}
            >
              <div className="banner_item mt-10">
                <img src={img.src} alt={`Slider ${index + 1}`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="px-[30px]">
          <div className=" image_title flex items-center justify-between mb-[27px]">
            <button className="left_arrow" onClick={handlePrev}>
              <img
                className="h-[32px] lg:h-auto"
                src={arrowLeft.src}
                alt="Left Arrow"
              />
            </button>

            <div className="title">
              <h2 className="text-6 md:text-[50px] font-fieldworkGeoBold font-semibold text-white">
                {titles[activeIndex]}
              </h2>
            </div>

            <button className="right_arrow" onClick={handleNext}>
              <img
                className="h-[32px] lg:h-auto"
                src={arrowRight.src}
                alt="Right Arrow"
              />
            </button>
          </div>

          <div className="description flex justify-center">
            <p className="text-white text-base md:text-[24px] font-fieldworkGeoLight max-w-[803px] text-center leading-[160%]">
              {descriptions[activeIndex]}
            </p>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default ServiceBannerSlider;
