import ProductsList from "../components/Main/Products/ProductsList/ProductsList";
import Slider from "../components/Main/Swiper/Swiper";
import Title from "../components/Main/Title/Title";

export default function Home() {

  return (
    <>
      <Title text="Свайпай нові товари" />
    <Slider />
      <ProductsList />
      </>
  )
}