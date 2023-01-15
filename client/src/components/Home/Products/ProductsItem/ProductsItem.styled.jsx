import styled from "styled-components";

export const Item = styled.li`
  background-color: rgb(253, 207, 243, 0.2);
  max-width: 350px;
  text-align: center;
	margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 6px;
  @media (min-width: 480px) and (max-width: 768px) {
    margin-left: 15px;
		margin-right: 15px;
		flex-basis: calc((100% - 60px) / 2);
  }
  @media (min-width: 1200px) {
		flex-basis: calc((100% - 90px) / 3);
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
  font-weight: 500;
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
  background-color: rgb(253, 207, 243);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;