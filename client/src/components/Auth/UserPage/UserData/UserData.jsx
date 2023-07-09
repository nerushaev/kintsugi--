import { useState } from "react";
import styled from "styled-components";
import svg from "../../../../images/filterIcons.svg";
import DeliveryData from "./DeliveryData";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const DataWrapper = styled.div`
  height: 40px;
  background-color: rgba(162, 210, 255, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const DataTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const Svg = styled.svg`
  transform: ${(props) => (props.active ? "rotate(90deg)" : "rotate(270deg)")};
`;

const Logo = ({ url, width, height, active }) => {
  return (
    <Svg active={active} width={width} height={height}>
      <use xlinkHref={url} />
    </Svg>
  );
};

export default function UserData() {
  const [isShow, setIsShow] = useState({
    orders: false,
    delivery: false,
    information: false,
    password: false,
    callback: false,
  });

  const handleClick = (e) => {
    const name = e.currentTarget.getAttribute("data-name");

    switch (name) {
      case name:
        setIsShow((prev) => {
          return {
            ...prev,
            [name]: !prev[name],
          };
        });
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <DataWrapper>
        <DataTitle>Історія ваших замовлень</DataTitle>
        <button data-name="orders" onClick={handleClick}>
          <Logo
            active={isShow.orders ? true : false}
            url={`${svg}#icon-arrow`}
            width="20"
            height="20"
          />
        </button>
      </DataWrapper>
      <DataWrapper>
        <DataTitle>Адреса доставки</DataTitle>
        <button data-name="delivery" onClick={handleClick}>
          <Logo
            active={isShow.delivery ? true : false}
            url={`${svg}#icon-arrow`}
            width="20"
            height="20"
          />
        </button>
      </DataWrapper>
      {isShow.delivery && <DeliveryData />}
      <DataWrapper>
        <DataTitle>Особиста інформація</DataTitle>
        <button data-name="information" onClick={handleClick}>
          <Logo
            active={isShow.information ? true : false}
            url={`${svg}#icon-arrow`}
            width="20"
            height="20"
          />
        </button>
      </DataWrapper>
      <DataWrapper>
        <DataTitle>Змінна паролю</DataTitle>
        <button data-name="password" onClick={handleClick}>
          <Logo
            active={isShow.password ? true : false}
            url={`${svg}#icon-arrow`}
            width="20"
            height="20"
          />
        </button>
      </DataWrapper>
      <DataWrapper>
        <DataTitle>Зворотній зв’язок:</DataTitle>
        <button data-name="callback" onClick={handleClick}>
          <Logo
            active={isShow.callback ? true : false}
            url={`${svg}#icon-arrow`}
            width="20"
            height="20"
          />
        </button>
      </DataWrapper>
    </Wrapper>
  );
}
