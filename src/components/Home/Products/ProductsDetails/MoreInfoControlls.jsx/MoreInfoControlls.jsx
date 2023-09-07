import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

const Title = styled.h2`
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-weight: 400;
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

const Image = styled.img`
  margin-bottom: 20px;
`;

const MoreInfoControllsWrapper = styled.div`
  margin-bottom: 50px;
`;

export default function MoreInfoControlls({ data }) {
  const { description, sizeInformation, category } = data;

  const [controllsButton, setControllsButton] = useState({
    moreInfo: true,
    delivery: false,
    payment: false,
    feedback: false
  });
  const { moreInfo, delivery, payment, feedback } = controllsButton;

  const handleClick = (e) => {
    const { id } = e.target;
    console.log(id);
    switch (id) {
      case id: {
        setControllsButton((prev) => {
          return {
            prev: false,
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
    <MoreInfoControllsWrapper>
      <ControllsButtonWrapper>
        <ControllsButton onClick={handleClick} id="moreInfo" active={moreInfo}>
          Характеристики
        </ControllsButton>
        <ControllsButton onClick={handleClick} id="delivery" active={delivery}>Доставка</ControllsButton>
        <ControllsButton onClick={handleClick} id="payment" active={payment}>Оплата</ControllsButton>
        <ControllsButton onClick={handleClick} id="feedback" active={feedback}>Відгуки</ControllsButton>
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
      {delivery && (
        <>
        <Image alt="" src={require("../../../../../images/nova-poshta-logo.jpg")} />
        <SubTitle>При оформленні замовлення вкажіть “Доставка новою поштою”, вкажіть ваше місто та відділення і ми відправимо замовлення протягом 24 годин</SubTitle>
        <SubTitle>Вартість доставки – за тарифами Нової Пошти.</SubTitle>
        <Image alt="" src={require("../../../../../images/afina-image.jpg")} />
        <SubTitle>Самовивіз в Одесі </SubTitle>
        <SubTitle>ТЦ Афіна за адресою: Грецька площа 3/4</SubTitle>
        <SubTitle>Режим роботи, без вихідних з 12:00 до 20:00</SubTitle>
        </>
      )}
      {payment &&
      <>
      <Title>Онлайн оплата за допомогою Liqpays</Title>
      <Image src={require("../../../../../images/liqpay-logo.jpg")}/>
      <SubTitle>LiqPay – це платіжний сервіс, що надає можливості інтернет-еквайрингу - приймання платежів на сайтах, у мобільних додатках, підключених до Інтернету. Є одним за найпопулярніших сервісів оплати в Україні.</SubTitle>
      <SubTitle>Щоб скористатися онлайн оплатою з Liqpay, достатньо при оформленні товару вибрати тип оплати Liqpay, та обрати кращій для вас спосіб оплати.</SubTitle>
      <Title>Оплата при отриманні товару</Title>
      <SubTitle>При оформленні замовлення оберіть оплату накладеним платежом, та сплатіть замовлення при отриманні товару на новій пошті. </SubTitle>
      <Title>Мінімальна сума замовлення складає - 200грн.</Title>
      </>
      }
    </MoreInfoControllsWrapper>
  );
}
