import { nanoid } from "nanoid";
import {
  Item,
  Image,
  Title,
  AddButton,
  Price,
  Description,
  CardIcon,
  CardInfoWrapper,
  ItemBody,
  Sizes
} from "../ListItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { addToBusket } from "../../../../redux/products/products-slice";
import { Link } from "react-router-dom";
import svg from "../../../../images/filterIcons.svg";
import { getBusket } from "../../../../redux/products/products-selectors";
import CountButton from "./CountButton";
import React from "react";

export const ProductsItem = ({ data }) => {
  const dispatch = useDispatch();
  const busket = useSelector(getBusket);

  const handleClick = (newData) => {
    dispatch(addToBusket(newData));
  };

  return data.map(
    ({ name, description, _id, image, price, amount, category, size }) => {
      const isFromBusket = busket.find((item) => item._id === _id);
      const item = busket.find((item) => item._id === _id);
      const itemId = nanoid();
      const sizes = size.join(", ");
      return (
        <Item key={itemId}>
          <ItemBody>
          <Link to={_id}>
            <Image src={image[0] ? image[0] : image} alt="" />
          </Link>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <CardInfoWrapper>
            <Price>{price} грн.</Price>
            <Sizes>{sizes === "-" ? "One size" : sizes}</Sizes>
            </CardInfoWrapper>
          {isFromBusket ? (
            <AddButton>
              <CountButton quantity={item.amount} _id={_id} />
            </AddButton>
          ) : (
            <AddButton
              onClick={() =>
                handleClick({
                  _id,
                  name,
                  description,
                  image,
                  price,
                  amount,
                  category,
                })
              }
            >
              Додати у кошик
              <CardIcon width="20" height="25">
                <use xlinkHref={`${svg}#icon-buy`} />
              </CardIcon>
            </AddButton>
          )}
          </ItemBody>
        </Item>
      );
    }
  );
};
