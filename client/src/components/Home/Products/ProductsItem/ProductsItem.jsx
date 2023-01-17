import { nanoid } from 'nanoid';
import { Item, Image, Title, AddButton, Price, Description } from '../ListItem.styled';

export const ProductsItem = ({ data }) => {
  return data.map(({ name, description, id, image, amount, price }) => {
    const itemId = nanoid()
    return (
      <Item key={itemId}>
          <Image src={image} alt="" />
          <Title>{name}</Title>
          <Price>{price}грн.</Price>
          <Description>{description}</Description>
          <AddButton>Додати у кошик</AddButton>
      </Item>
    )
  })
};