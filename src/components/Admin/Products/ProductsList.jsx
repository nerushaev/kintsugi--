import { nanoid } from 'nanoid';
import React from 'react';
import { useSelector } from 'react-redux';
import { getStateProducts } from '../../../redux/products/products-selectors';

import ProductsItem from './ProductsItem';


export default function ProductsTable() {
  const products = useSelector(getStateProducts);
  // const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const { id } = e.target;
  //   dispatch(removeProduct(id));
  // }

  // const handleUpdate = (e) => {
  //   const elementId = e.target.id;
  //   const tempInput = document.createElement("input");  
  //   tempInput.value = elementId;  
  //   document.body.appendChild(tempInput);
  //   tempInput.focus()
  //   tempInput.select();  
  //   document.execCommand("copy");  
  //   document.body.removeChild(tempInput);  
  // }

  return products.map((data) => {
      const keyId = nanoid();
      return <ProductsItem key={keyId} data={data} />
    })
};
