import { ProductsItem } from "../ProductsItem/ProductsItem";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../../redux/products/products-operation';
import { useEffect, useRef, useState } from "react";
import { getStateProducts, getTotalPages, getFilteredProducts, selectIsLoading } from '../../../../redux/products/products-selectors';
import { ButtonWrapper, Button } from '../../../Buttons/Buttons';
import { getFilter } from "../../../../redux/filter/filter-selectors";
import { setFilter } from "../../../../redux/filter/filter-slice";
import { FilterWrapper, FilterButton } from './FilterPanel.styled';
import { List, ListWrapper } from '../List.styled';
import Loader from "../../../Loader/Loader";

const ProductsList = () => {
  const dispatch = useDispatch();
  const product = useSelector(getFilteredProducts);
  const [page, setPage] = useState(1);
  const totalPages = useSelector(getTotalPages);
  const filter = useSelector(getFilter);
  const loading = useSelector(selectIsLoading);
  const scrollPosition = useRef(null);

  useEffect(() => {
    if (!filter) {
      dispatch(getProducts({page}));
    } else {
      dispatch(getProducts({ page, filter: filter }));
    }
  }, [page, filter]);

  const handlePagePrev = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1)
    }
    scrollPosition.current.scrollIntoView({ block: "start", behavior: 'smooth' });
  }

  const handlePageNext = (e) => {
    e.preventDefault();
    if (page < totalPages) {
      setPage(page + 1)
    }
    scrollPosition.current.scrollIntoView({ block: "start", behavior: 'smooth' });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.id);
    dispatch(setFilter(e.target.id));
    setPage(1);
  }

  return (
    <>
      <FilterWrapper onClick={handleSubmit}>
        <FilterButton ref={scrollPosition} id="">Все</FilterButton>
        <FilterButton id="Перука">Перуки</FilterButton>
        <FilterButton id="Костюм">Костюми</FilterButton>
        <FilterButton id="Аксессуар">Аксессуари</FilterButton>
        <FilterButton id="Іньше">Іньше</FilterButton>
      </FilterWrapper>
        {loading && <Loader />}
      <ListWrapper>
        <List>
          <ProductsItem data={product} />
        </List>
      </ListWrapper>
      <ButtonWrapper>
        <Button onClick={handlePagePrev}>Prev</Button>
        <Button onClick={handlePageNext}>Next</Button>
      </ButtonWrapper>
      </>
  )
}

export default ProductsList;