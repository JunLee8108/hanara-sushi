import "./Home.css";
import "./HomeCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const bakedRoll = require("../../assets/Baked-Salmon-Roll.webp");
const HallelujahRoll = require("../../assets/Hallelujah-Roll.webp");
const RainbowRoll = require("../../assets/Rainbow-Roll.webp");

export default function HomeCarousel() {
  return (
    <div className="home-carousel-container home-common-container mg-left-right-auto ">
      <h1 className="home-title-border-left home-carousel-title">
        Our Specialty
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        modules={[Pagination, Navigation, Keyboard]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bakedRoll} loading="lazy" alt="img" />

          <h2>Baked Roll</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={HallelujahRoll} loading="lazy" alt="img" />

          <h2>Hallelujah Roll</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={RainbowRoll} loading="lazy" alt="img" />

          <h2>Rainbow Roll</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
