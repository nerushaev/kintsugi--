import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

const Title = styled.h2`
  font-size: ${theme.fontSizes.medium};
  font-weight: 400;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: ${theme.fontSizes.medium};
  margin-bottom: 30px;
`;

const ControllsButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const ControllsButton = styled.button`
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  padding: 12px 10px;
  background-color: ${(props) =>
    props.active
      ? `${theme.colors.formButton}`
      : `${theme.colors.formButtonDisabled}`};
  &:not(:last-child) {
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;

export default function MoreInfoControlls({ data }) {
  const { description, sizeInformation, category } = data;

  const [controllsButton, setControllsButton] = useState({
    moreInfo: true,
    // delivery: false,
  });
  const { moreInfo } = controllsButton;

  const handleClick = (e) => {
    const { id } = e.target;
    console.log(id);
    switch (id) {
      case id: {
        setControllsButton((prev) => {
          return {
            ...prev,
            [id]: !controllsButton[id],
          };
        });
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <>
      <ControllsButtonWrapper>
        <ControllsButton onClick={handleClick} id="moreInfo" active={moreInfo}>
          Характеристики
        </ControllsButton>
        <ControllsButton onClick={handleClick} id="delivery" active={moreInfo}>Доставка</ControllsButton>
        <ControllsButton>Оплата</ControllsButton>
        <ControllsButton>Відгуки</ControllsButton>
      </ControllsButtonWrapper>
      {moreInfo && (
        <>
          <Title>Категорія</Title>
          <SubTitle>{category}</SubTitle>
          <Title>Опис</Title>
          <SubTitle>{description}</SubTitle>
          <Title>Розмірна сітка</Title>
          <SubTitle>{sizeInformation}</SubTitle>
        </>
      )}
      {/* {delivery && (
        <img href={require("../../../../../images/nova-poshta-logo.jpg")} />
      )} */}
    </>
  );
}
