import { ProductsItem } from "../ProductsItem/ProductsItem";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsByName } from '../../../../redux/products/products-operation';
import { useEffect, useRef, useState } from "react";
import { getTotalPages, getFilteredProducts, selectIsLoading } from '../../../../redux/products/products-selectors';
import { ButtonWrapper, Button } from '../../../Buttons/Buttons';
import { getFilter } from "../../../../redux/filter/filter-selectors";
import { setFilter } from "../../../../redux/filter/filter-slice";
import { List, ListWrapper } from '../List.styled';
import Loader from "../../../Loader/Loader";
import FilterPanel from "../../FilterPanel/FilterPanel";
import Pagination from "../../Pagination/Pagination";
import { getSearch } from "../../../../redux/search/search-selectors";

const ProductsList = () => {
  const dispatch = useDispatch();
  const product = useSelector(getFilteredProducts);
  const [page, setPage] = useState(1);
  const totalPages = useSelector(getTotalPages);
  const filter = useSelector(getFilter);
  const loading = useSelector(selectIsLoading);
  const scrollPosition = useRef(null);
  const search = useSelector(getSearch);


  function getObjectKeysString(obj) {
    let keys = Object.keys(obj);
    let result = '';
    for (let i = 0; i < keys.length; i++) {
      if (obj[keys[i]]) {
        result += `${keys[i]}${i < keys.length - 1 ? ',' : ''}`;
      }
    }
    return result;
  }


  useEffect(() => {
    if (!search && !Object.values(filter).includes(true)) {
      dispatch(getProducts({page}));
    } else if (search) {
      dispatch(getProductsByName({ page: 1, search: search }));
    } else if (filter) {
      const result = getObjectKeysString(filter);
      dispatch(getProducts({ page, filter: result }));
    }
  }, [page, filter, search, dispatch]);

  const handlePagination = (e) => {
    e.preventDefault();
    setPage(e.target.textContent)
    scrollPosition.current.scrollIntoView({ block: "start", behavior: 'smooth' });
  }

  // const handlePageNext = (e) => {
  //   e.preventDefault();
  //   if (page < totalPages) {
  //     setPage(page + 1)
  //   }
  //   scrollPosition.current.scrollIntoView({ block: "start", behavior: 'smooth' });
  // }

  return (
    <>
      <FilterPanel/>
        {loading && <Loader />}
      <ListWrapper>
        <List ref={scrollPosition}>
          <ProductsItem data={product} />
        </List>
      </ListWrapper>
      <Pagination handlePagePrev={handlePagination} totalPages={totalPages} currentPage={page} />
      </>
  )
}

export default ProductsList;