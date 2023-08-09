import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { novaInstance } from "../../../../API/api";
import { NOVA_API_KEY } from "../../../../API/nova";
import { selectUser } from "../../../../redux/auth/auth-selectors";
import {
  ProductsItem,
  ProductsItemImage,
  ProductsItemTextWrapper,
  ProductsList,
  Text,
} from "../../../Fields/Fields.styled";

const Wrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export default function OrderHistory({ orders }) {
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        await novaInstance.post("https://api.novaposhta.ua/v2.0/json/", {
          apiKey: NOVA_API_KEY,
          modelName: "TrackingDocument",
          calledMethod: "getStatusDocuments",
          methodProperties: {
            Documents: [
              {
                DocumentNumber: orders,
                Phone: user.phone,
              },
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchStatus();
  }, [orders, user.phone]);

  if (orders?.length === 0) {
    return <Text>Тут будуть відображатися ваші замовлення!</Text>;
  }

  return orders.map((item) => {
    return (
      <Wrapper key={item.orderRef}>
        <Text accent={true}>{item.date}</Text>
        <ProductsList key={item.orderRef}>
          {item.products.map((item) => {
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
        </ProductsList>
      </Wrapper>
    );
  });
}
