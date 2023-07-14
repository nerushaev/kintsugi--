import ProductsList from "../components/Home/Products/ProductsList/ProductsList";
import Slider from "../components/Home/Swiper/Swiper";
import Title from "../components/Home/Title/Title";
import ComingSoonList from "../components/Home/Products/ComingSoonList/ComingSoonList";
import Search from "../components/Home/Search/Search";
import Loader from "../components/Loader/Loader";

const homePageSlider = [
  "https://res.cloudinary.com/dzjmswzgp/image/upload/v1681388144/slider-2_syqry2.jpg",
  "https://res.cloudinary.com/dzjmswzgp/image/upload/v1681388144/slider-3_bmnuim.jpg",
  "https://res.cloudinary.com/dzjmswzgp/image/upload/v1681388146/slider-1_carms9.jpg",
];

export default function Home() {
  return (
    <>
      <Slider images={homePageSlider} />
      <Title text="Каталог" />
      <Search />
      <ProductsList />
    </>
  );
}
