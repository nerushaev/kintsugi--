import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductsById, getSimilarProducts } from "../redux/products/products-operation";
import ProductsDetails from "../components/Home/Products/ProductsDetails/ProductsDetails";
import {
  getDetails,
  selectIsLoading,
  selectSimilarProducts,
} from "../redux/products/products-selectors";
import Loader from "../components/Loader/Loader";
import { List } from "../components/Home/Products/List.styled";
import { ProductsItem } from "../components/Home/Products/ProductsItem/ProductsItem";

export default function Product() {
  const dispatch = useDispatch();
  const _id = useParams();
  const product = useSelector(getDetails);
  const isLoading = useSelector(selectIsLoading);
  const products = useSelector(selectSimilarProducts);

  const productCategory = useMemo(() => {
    return product.category;
  }, [product])

  useEffect(() => {
      dispatch(getProductsById(...Object.values(_id)));
      if(productCategory) {
        dispatch(getSimilarProducts({category: productCategory}));
      }
  }, [dispatch, _id, productCategory]);

  return (
    <>
      {isLoading && <Loader />}
      <ProductsDetails data={product} />
      <List>
        <ProductsItem data={products} id={product._id} />
      </List>
    </>
  );
}
