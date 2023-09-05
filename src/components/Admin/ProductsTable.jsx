import { nanoid } from 'nanoid';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../../redux/products/products-operation';
import { getStateProducts } from '../../redux/products/products-selectors';
import { Table, Caption, Th, Tr } from './ProductsTable.styled';

export default function ProductsTable() {
  const products = useSelector(getStateProducts);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    dispatch(removeProduct(id));
  }

  const handleUpdate = (e) => {
    const elementId = e.target.id;
    const tempInput = document.createElement("input");  
    tempInput.value = elementId;  
    document.body.appendChild(tempInput);
    tempInput.focus()
    tempInput.select();  
    document.execCommand("copy");  
    document.body.removeChild(tempInput);  
  }

  const elements = products.map(({ _id, name, category, price, amount }) => {
    const keyId = nanoid();
    return <Tr key={keyId}>
      <Th>{name}</Th>
      <Th>{category}</Th>
      <Th>{price}</Th>
      <Th>{amount}</Th>
      <Th id={_id} onClick={handleUpdate}>id</Th>
      <Th id={_id} onClick={handleClick}>Delete</Th>
      </Tr>
  });

  return (
    <Table>
      <Caption>Products</Caption>
      <thead>
      <Tr>
        <Th>Name</Th>
        <Th>Category</Th>
        <Th>Price</Th>
        <Th>Amount</Th>
      </Tr>
      </thead>
      <tbody>
      {elements}
      </tbody>
    </Table>
  );
};
