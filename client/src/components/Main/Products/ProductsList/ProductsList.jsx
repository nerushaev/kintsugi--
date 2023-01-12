import { useState, useEffect } from "react";
import {getItems} from "../../../../API/api";
import { ProductsItem } from "../ProductsItem/ProductsItem";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function onGetPosts() {
    try {
      const data = await getItems();
      console.log(data);
      setItems(data);
    } catch(error) {
      setError(error);
    }
    }
    onGetPosts();
  }, [])

  return (
      <List>
        <ProductsItem data={items} />
        {error && <p>Somethink wrong...</p>}
      </List>
  )
}

export default ProductsList;