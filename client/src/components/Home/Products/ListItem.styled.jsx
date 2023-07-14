import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CardInfoWrapper = styled.div`
  padding: 0 10px;
`;

export const Item = styled.li`
  position: relative;
  font-family: "Montserrat";
  text-align: left;
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
  // padding-bottom: 60px;
  transform: scale(1);
  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  flex-basis: calc((100% - 20px) / 2);

  @media (min-width: 480px) {
    flex-basis: calc((100% - 30px) / 3);
  }
  @media (min-width: 768px) {
    flex-basis: calc((100% - 40px) / 4);
  }
  @media (min-width: 1200px) {
    flex-basis: calc((100% - 60px) / 6);
  }
  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Image = styled.img`
  max-width: 350px;
  margin-bottom: 15px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: ${theme.fontSizes.medium};
  margin-bottom: 10px;
  height: 50px;
`;

export const Price = styled.p`
  font-weight: 600;
  color: ${theme.colors.rose};
  font-size: ${theme.fontSizes.medium};
  margin-bottom: 10px;
  overflow: scroll;
`;

export const AddButton = styled.button`
  // position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: ${theme.fontSizes.medium};
  padding: 10px 0;
  background-color: ${(props) =>
    props.disabled ? "#D6B2D9" : `${theme.colors.formButton}`};
  color: #000;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #eac3db;
  }
`;

export const Description = styled.p`
  height: 45px;
  font-size: 12px;
  margin-bottom: 10px;
  overflow: scroll;
`;

export const CardIcon = styled.svg`
  margin-left: 5px;
  fill: currentColor;
`;
