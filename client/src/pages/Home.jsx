import ProductsList from "../components/Home/Products/ProductsList/ProductsList";
import Slider from "../components/Home/Swiper/Swiper";
import Title from "../components/Home/Title/Title";
import ComingSoonList from '../components/Home/Products/ComingSoonList/ComingSoonList';

export default function Home() {
  return (
    <>
      <Title text="Нові пропозиції" />
      <Slider />
      <Title text="Рекомендуємо" />
      <ProductsList />
      <Title text="Cкоро в наявності" />
      <ComingSoonList />
      </>
  )
}