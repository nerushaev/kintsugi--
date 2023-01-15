import ProductsList from "../components/Home/Products/ProductsList/ProductsList";
import Slider from "../components/Home/Swiper/Swiper";
import Title from "../components/Home/Title/Title";

export default function Home() {

  return (
    <>
      <Title text="Акції та знижки" />
    <Slider />
      <ProductsList />
      </>
  )
}