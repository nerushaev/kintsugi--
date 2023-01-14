import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css/pagination";
import 'swiper/css';
import './Swiper.css';

export default function Slider() {
  return (
    <Swiper className="home-swiper" pagination={true} modules={[Pagination]} >
    <SwiperSlide><img src={require("../../../images/slider-1.jpeg")} alt="" /></SwiperSlide>
    <SwiperSlide><img src={require("../../../images/slider-2.jpeg")} alt="" /></SwiperSlide>
    <SwiperSlide><img src={require("../../../images/slider-3.jpeg")} alt="" /></SwiperSlide>
    </Swiper>
  )
}
