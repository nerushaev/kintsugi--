import { nanoid } from "nanoid";
import styled from "styled-components";
import {
  ProductsItem,
  ProductsItemImage,
  ProductsItemTextWrapper,
  ProductsList,
  Text,
} from "../../../Fields/Fields.styled";
import OrderStatusBar from "./OrderStatusBar";

const Wrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export default function OrderHistory({ orders, userPhone }) {
  if (orders?.length === 0) {
    return <Text>Тут будуть відображатися ваші замовлення!</Text>;
  }

  return orders.map((item) => {
    return (
      <Wrapper key={item.orderRef}>
        <Text accent={true}>{item.date}</Text>
        <ProductsList key={item.orderRef}>
          {item.products.map((item) => {
            console.log(item);
            const itemId = nanoid();
            const { name, price, amount, image } = item;
            return (
              <ProductsItem key={itemId}>
                <ProductsItemImage src={image[0]} alt="" />
                <ProductsItemTextWrapper>
                  <Text>{name}</Text>
                  <Text>{price}</Text>
                  <Text>{amount}</Text>
                </ProductsItemTextWrapper>
              </ProductsItem>
            );
          })}
          <OrderStatusBar documentRef={item.orderRef} userPhone={userPhone} />
        </ProductsList>
      </Wrapper>
    );
  });
}
