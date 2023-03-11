import styled from "styled-components";

export const Item = styled.li`
  position: relative;
  font-family: "Helvetica Neue";
  background-color: #F3F3F3;
  max-width: 350px;
  text-align: center;
	margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 60px;
  transform: scale(1);
	transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 480px) and (max-width: 768px) {
    margin-left: 15px;
		margin-right: 15px;
		flex-basis: calc((100% - 60px) / 2);
  }
  @media (min-width: 768px) {
		flex-basis: calc((100% - 90px) / 3);
  }
  @media (min-width: 1200px) {
    margin-left: 30px;
		margin-right: 30px;
		flex-basis: calc((100% - 180px) / 3);
  }
  &:hover, &:focus {
    transform: scale(1.01);
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Image = styled.img`
  max-width: 350px;
  margin-bottom: 15px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-weight: 600;
  color: #342E37;
  font-size: 18px;
  margin-bottom: 10px;
  max-height: 170px;
  overflow: scroll;
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 18px;
  padding: 16px 0;
  background-color: #EFCFE3;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
      background-color: #EAC3DB;
    }
`;

export const Description = styled.p`
  height: 30px;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0 10px;
  overflow: hidden;
`;

export const CardIcon = styled.svg`
  margin-left: 5px;
  fill: currentColor;
`;
