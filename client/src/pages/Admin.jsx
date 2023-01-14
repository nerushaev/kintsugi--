import { Navigate } from 'react-router';
import FormAddProducts from '../components/Admin/Form';
import { getStateProducts } from '../redux/products/products-selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/products/products-operation';
import { useDispatch } from 'react-redux';
import ProductsTable from '../components/Admin/ProductsTable';

export default function Admin() {
  const products = useSelector(getStateProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <FormAddProducts />
      {products && <ProductsTable data={products}/>}
    </>
  )
}
