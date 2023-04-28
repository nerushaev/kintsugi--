import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Slider from '../../Swiper/Swiper';

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
      {image ? <Slider images={image} /> : ""}
      
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
