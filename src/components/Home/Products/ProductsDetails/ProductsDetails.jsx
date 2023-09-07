import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Slider from '../../Swiper/Swiper';
import { Button } from '../../../Buttons/Buttons';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { theme } from '../../../../styles/theme';

const GoBackLink = styled(NavLink)`
  margin-left: 10px;
`;
const GoBackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const ProductName = styled.h2`
  font-size: ${theme.fontSizes.medium};
  margin-bottom: 20px;
`;

const ProductWrapper = styled.div`
  margin-bottom: 50px;
`;

const DetailsCategory = styled.p`
  font-weight: 400;
  font-size: ${theme.fontSizes.medium};
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  max-width: 480px;
`;
const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsText = styled.p`
  font-weight: 500;
  font-size: ${theme.fontSizes.medium};
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: ${theme.fontSizes.large};
  margin-bottom: 30px;
`

export default function ProductsDetails({ data }) {
  const { name, image, description, price, size } = data;
  const sizes = size && size.join(", ");
  return (
    <>
      <GoBackWrapper>
        <ArrowBackIcon />
      <GoBackLink to="/">
          Назад
      </GoBackLink>
    </GoBackWrapper>
      
      <ProductWrapper>
        <ImageWrapper>
        {image ? <Slider images={image} /> : ""}
      </ImageWrapper>
      <DetailsWrapper>
      <ProductName>{name}</ProductName>
      <DetailsCategory>Опис</DetailsCategory>
      <DetailsText>{description}</DetailsText>
      <DetailsCategory>Розміри</DetailsCategory>
      <DetailsText>{size === "-" ? "One size" : sizes}</DetailsText>
        <Price accent>{price}грн.</Price>
      <Button>
            Додати у кошик
      </Button>
      </DetailsWrapper>
      </ProductWrapper>
    </>
  )
};
