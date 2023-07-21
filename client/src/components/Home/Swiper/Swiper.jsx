import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "./Swiper.css";

export default function Slider({ images }) {
  const elements = images.map((item) => {
    return (
      <SwiperSlide key={item}>
        <img src={item} alt="" />
      </SwiperSlide>
    );
  });
  return (
    <Swiper className="home-swiper" pagination={true} modules={[Pagination]}>
      {elements}
    </Swiper>
  );
}
