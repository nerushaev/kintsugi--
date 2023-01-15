import FormAddProducts from '../components/Admin/Form';
import { getStateProducts } from '../redux/products/products-selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/products/products-operation';
import { useDispatch } from 'react-redux';
import ProductsTable from '../components/Admin/ProductsTable';
import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';
import { selectIsLoading } from '../redux/products/products-selectors';

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Admin() {
  const products = useSelector(getStateProducts);
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <FormAddProducts />
      {loading && <CircleWrapper>
      <Circles height="80" width="80" color="rgb(253, 207, 243)" ariaLabel="circles-loading" visible={true} />
      </CircleWrapper>}
      {products && <ProductsTable data={products}/>}
    </>
  )
}
