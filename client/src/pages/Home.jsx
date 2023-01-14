import ProductsList from "../components/Home/Products/ProductsList/ProductsList";
import Slider from "../components/Home/Swiper/Swiper";
import Title from "../components/Home/Title/Title";

export default function Home() {

  return (
    <>
      <Title text="Свайпай нові товари" />
    <Slider />
      <ProductsList />
      </>
  )
}