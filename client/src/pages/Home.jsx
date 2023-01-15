import ProductsList from "../components/Home/Products/ProductsList/ProductsList";
import Slider from "../components/Home/Swiper/Swiper";
import Title from "../components/Home/Title/Title";
import FilterPanel from "../components/Home/FilterPanel/FilterPanel";

export default function Home() {

  return (
    <>
      <Title text="Акції та знижки" />
      <Slider />
      <Title text="Рекомендуємо" />
      <FilterPanel />
      <ProductsList />
      </>
  )
}