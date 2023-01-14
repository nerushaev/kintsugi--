import { ProductsItem } from "../ProductsItem/ProductsItem";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../../redux/products/products-operation';
import { useEffect } from "react";
import { getStateProducts } from '../../../../redux/products/products-selectors';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsList = () => {
  const dispatch = useDispatch();
  const product = useSelector(getStateProducts);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
      <List>
        <ProductsItem data={product} />
        {/* {error && <p>Somethink wrong...</p>} */}
      </List>
  )
}

export default ProductsList;