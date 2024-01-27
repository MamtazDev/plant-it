// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination";

// import required modules
import { useEffect, useRef } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
const Demo = ({ handlePrev, handleNext }) => {
  //   const navigationPrevRef = useRef(null);
  //   const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);
  // Function to initialize Swiper
  const initSwiper = (swiper) => {
    if (swiperRef.current) return;

    swiperRef.current = swiper;

    // Example: Listen to Swiper events
    swiper.on("slideChange", () => {
      console.log("Slide changed");
    });
  };
  // useEffect to initialize Swiper when the component mounts
  useEffect(() => {
    if (swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      // Example: Listen to Swiper events
      swiperInstance.on("slideChange", () => {
        console.log("Slide changed in Demo");
      });
    }
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        navigation={{
          prevEl: ".demo-prev",
          nextEl: ".demo-next",
        }}
        onSwiper={initSwiper}
        className="mySwiper">
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        {/* Add more slides as needed */}

        {/* Navigation arrows */}
        {/* <div className="swiper_btn">
          <div ref={navigationPrevRef} className="swiper-button-prev"></div>
          <div ref={navigationNextRef} className="swiper-button-next"></div>
        </div> */}
      </Swiper>
    </>
  );
};

export default Demo;
