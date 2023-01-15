import { nanoid } from 'nanoid';
import { Item, Image, Title, AddButton, Price, Description } from './ProductsItem.styled';

// export const Button = styled.button`
//   width: 200px;
//   height: 40px;
//   background-color: white;
//   border: 1px solid black;
//   border-radius: 5px;
//   font-size: 16px;
//   margin-left: 10px;

//   transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

//   &:hover, &:focus {
//     border: medium none rgb(255,182,193);
//     box-shadow: rgb(255,105,180) 0 0 2px 2px;
//     outline: 0;
//     background-color: rgb(255,105,180, 0.3);
//   }
// `;

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