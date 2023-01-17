import styled from "styled-components";

export const Item = styled.li`
  font-family: "Helvetica Neue";
  background-color: rgba(205, 180, 219, 0.3);
  max-width: 350px;
  text-align: center;
	margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 6px;
  // border: 1px solid white;
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
    background-color: rgba(205, 180, 219, 0.6);
    // border: 2px solid rgba(205, 180, 219, 0.3);
	  transition: scale cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Image = styled.img`
  max-width: 350px;
  heigth: 100%;
  margin-bottom: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const Price = styled.p`
  font-weight: 600;
  color: #342E37;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: rgba(255, 175, 204, 0.5);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
    &:hover, &:focus {
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      background-color: rgba(255, 175, 204, 1);
    }
`;

export const Description = styled.p`
  height: 30px;
  font-size: 14px;
  margin-bottom: 10px;
  padding: 0 10px;
  overflow: hidden;
`;
