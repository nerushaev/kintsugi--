import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const GoBackLink = styled(NavLink)`
  margin-bottom: 20px;
`;

const AddButton = styled.button`

`;

export default function ProductsDetails({ data }) {
  const { name, image, description, price } = data;
  return (
    <>
    <GoBackLink to="/">Go back</GoBackLink>
    <div>
      <img alt="" src={image}></img>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <AddButton>
            Додати у кошик
      </AddButton>
      </div>
    </>
  )
};
