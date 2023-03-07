import { nanoid } from 'nanoid';
import { Item, Image, Title, AddButton, Price, Description } from '../ListItem.styled';
import { useDispatch } from 'react-redux';
import { addToBusket } from '../../../../redux/products/products-slice';
import { Link } from 'react-router-dom';

export const ProductsItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = (newData) => {
    dispatch(addToBusket(newData));
  }

  return data.map(({ name, description, _id, image, amount, price }) => {
    const itemId = nanoid()
    return (
      <Item key={itemId}>
          <Link to={_id}>
          <Image src={image} alt="" />
          </Link>
          <Title>{name}</Title>
          <Price>{price}грн.</Price>
          <Description>{description}</Description>
          <AddButton onClick={() => handleClick({_id, name, description, image, price})}>Додати у кошик</AddButton>
      </Item>
    )
  })
};