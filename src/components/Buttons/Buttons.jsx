import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.noMargin ? "0" : "30px"};
  align-items: flex-end;
`;

export const Button = styled.button`
  font-size: ${theme.fontSizes.medium};
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 20px;
  padding: 10px 30px;
  background-color: ${(props) =>
    props.delete ? theme.colors.red : theme.colors.formButton};

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.delete ? theme.colors.redAccent : theme.colors.formButtonAccent};
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
    font-size: ${theme.fontSizes.large};
    padding: 20px 50px;
  }
`;
