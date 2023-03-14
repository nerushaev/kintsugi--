import ProductsList from "../components/Home/Products/ProductsList/ProductsList";
import Slider from "../components/Home/Swiper/Swiper";
import Title from "../components/Home/Title/Title";
import ComingSoonList from '../components/Home/Products/ComingSoonList/ComingSoonList';
import Search from "../components/Home/Search/Search";

export default function Home() {
  return (
    <>
      <Title text="Нові пропозиції" />
      <Slider />
      <Title text="Рекомендуємо" />
      <Search />
      <ProductsList />
      <Title text="Cкоро в наявності" />
      <ComingSoonList />
      </>
  )
}