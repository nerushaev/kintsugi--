import { nanoid } from 'nanoid';
import { Item, Image, Title, AddButton, Price, Description, CardIcon, CardInfoWrapper } from '../ListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addToBusket } from '../../../../redux/products/products-slice';
import { Link } from 'react-router-dom';
import svg from '../../../../images/filterIcons.svg';
import { getBusket } from '../../../../redux/products/products-selectors';
import CountButton from './CountButton';

export const ProductsItem = ({ data }) => {
  const dispatch = useDispatch();
  const busket = useSelector(getBusket);

  const handleClick = (newData) => {
    dispatch(addToBusket(newData));
  }

  return data.map(({ name, description, _id, image, price, amount, category }) => {
    const isFromBusket = busket.find(item => item._id === _id);
    const item = busket.find(item => item._id === _id);
    const itemId = nanoid()
    return (
      <Item key={itemId}>
          <Link to={_id}>
          <Image src={image[0] ? image[0] : image} alt="" />
          </Link>
          <CardInfoWrapper>
          <Title>{name}</Title>
          <Price>{price} грн.</Price>
          <Description>{description}</Description>
        </CardInfoWrapper>
        {isFromBusket ? (
          <AddButton>
            <CountButton quantity={item.amount} _id={_id} />
          </AddButton>
        ) : (
          <AddButton onClick={() => handleClick({ _id, name, description, image, price, amount, category })}>
            Додати у кошик
          <CardIcon width="20" height="25">
              <use xlinkHref={`${svg}#icon-buy`} />
          </CardIcon>
        </AddButton>
        )}
      </Item>
    )
  })
};