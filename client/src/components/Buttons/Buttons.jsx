import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  font-size: ${theme.fontSizes.medium};
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 20px;
  padding: 10px 30px;
  background-color: ${theme.colors.formButton};

  &:hover,
  &:focus {
    background-color: ${theme.colors.formButtonAccent};
    transition: background-color ${theme.animation.cubicBezier};
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.large};
    padding: 15px 40px;
  }
  @media (min-width: 1200px) {
    font-size: ${theme.fontSizes.extraLarge};
    padding: 20px 50px;
  }
`;
