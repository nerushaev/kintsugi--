import FormAddProducts from "../../components/Admin/Form";
import { getStateProducts } from "../../redux/products/products-selectors";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getAllProducts } from "../../redux/products/products-operation";
import { useDispatch } from "react-redux";
import ProductsTable from "../../components/Admin/ProductsTable";
import { selectIsLoading } from "../../redux/products/products-selectors";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

export default function Admin() {
  const products = useSelector(getStateProducts);
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <div>
        <Link style={{ marginRight: 15 }}>Додати товар</Link>
        <Link to="baners">Банери</Link>
      </div>
      <FormAddProducts />
      {loading && <Loader />}
      {products && <ProductsTable data={products} />}
    </>
  );
}
