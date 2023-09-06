import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredProducts } from '../../../../redux/products/products-operation';
import { selectFilteredProducts } from '../../../../redux/products/products-selectors';
import ProductsList from '../ProductsList/ProductsList';

export default function SimilarProducts({category}) {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(getFilteredProducts(category));
  }, [category, dispatch]);

  return (
    <ProductsList products={products} />
  )
}
