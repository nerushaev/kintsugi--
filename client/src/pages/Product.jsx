import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductsById } from "../redux/products/products-operation";
import ProductsDetails from "../components/Home/Products/ProductsDetails/ProductsDetails";
import {
  getDetails,
  selectIsLoading,
} from "../redux/products/products-selectors";
import Loader from "../components/Loader/Loader";

export default function Product() {
  const dispatch = useDispatch();
  const _id = useParams();
  const product = useSelector(getDetails);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getProductsById(...Object.values(_id)));
  }, [dispatch, _id]);

  return (
    <>
      {isLoading && <Loader />}
      <ProductsDetails data={product} />
    </>
  );
}
