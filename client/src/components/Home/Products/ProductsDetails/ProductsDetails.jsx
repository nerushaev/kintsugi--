import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Slider from '../../Swiper/Swiper';
import svg from '../../../../images/filterIcons.svg';
import { ProductName, Text } from '../../../Fields/Fields.styled';
import { ButtonWrapper, Button } from '../../../Buttons/Buttons';
const GoBackLink = styled(NavLink)`
  margin-left: 10px;
`;
const GoBackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`

`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ProductsDetails({ data }) {
  const { name, image, description, price } = data;
  return (
    <>
      <GoBackWrapper>
      <svg width="21" height="16">
        <use xlinkHref={`${svg}#icon-arrow`} />
      </svg>
      <GoBackLink to="/">
          Go back
      </GoBackLink>
    </GoBackWrapper>
      

      <ImageWrapper>
      {image ? <Slider images={image} /> : ""}
        </ImageWrapper>
      <TextWrapper>
      <ProductName>{name}</ProductName>
      <Text>{description}</Text>
        <Text accent>{price}грн.</Text>
        <ButtonWrapper>
      <Button>
            Додати у кошик
      </Button>
      </ButtonWrapper>
      </TextWrapper>
    </>
  )
};
