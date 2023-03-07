import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductsById } from "../redux/products/products-operation";
import ProductsDetails from '../components/Home/Products/ProductsDetails/ProductsDetails';
import { getDetails } from '../redux/products/products-selectors';

export default function Product() {
  const dispatch = useDispatch();
  const _id = useParams();
  const product = useSelector(getDetails);

  useEffect(() => {
    dispatch(getProductsById(...Object.values(_id)))
  }, [dispatch])

  return (
    <ProductsDetails data={product} />
  )
}
