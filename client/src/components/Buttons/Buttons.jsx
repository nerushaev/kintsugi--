import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 20px;
  padding: 10px 30px;
  background-color: rgba(162, 210, 255, 1);
  &:not(:last-child) {
    margin-right: 15px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 15px 40px;
  }
  @media (min-width: 1200px) {
    font-size: 28px;
    padding: 20px 50px;
  }
`;
