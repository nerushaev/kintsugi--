import { nanoid } from 'nanoid';
import { Item, Image, Title, AddButton, Price, Description } from '../ListItem.styled';
import { useDispatch } from 'react-redux';
import { addToBusket } from '../../../../redux/products/products-slice';

export const ProductsItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = (newData) => {
    dispatch(addToBusket(newData));
  }

  return data.map(({ name, description, _id, image, amount, price }) => {
    const itemId = nanoid()
    return (
      <Item key={itemId}>
          <Image src={image} alt="" />
          <Title>{name}</Title>
          <Price>{price}грн.</Price>
          <Description>{description}</Description>
          <AddButton onClick={() => handleClick({_id, name, description, image, price})}>Додати у кошик</AddButton>
      </Item>
    )
  })
};