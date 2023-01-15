import { ProductsItem } from "../ProductsItem/ProductsItem";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../../redux/products/products-operation';
import { useEffect } from "react";
import { getFilteredProducts, getStateProducts } from '../../../../redux/products/products-selectors';

const List = styled.ul`
	margin-bottom: -30px;
  align-items: center;
  @media (min-width: 480px) {
    display: flex;
		flex-wrap: wrap;
		margin-left: -15px;
		margin-right: -15px;
    margin-bottom: 30px;
  }
`;

const ProductsList = () => {
  const dispatch = useDispatch();
  const product = useSelector(getFilteredProducts);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
    <List>
        <ProductsItem data={product} />
        {/* {error && <p>Somethink wrong...</p>} */}
      </List>
      </>
  )
}

export default ProductsList;