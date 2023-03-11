import styled from "styled-components";

export const List = styled.ul`
	margin-bottom: -30px;
  justify-content: center;
  @media (min-width: 480px) {
    display: flex;
		flex-wrap: wrap;
		margin-left: -15px;
		margin-right: -15px;
    margin-bottom: 30px;
  @media (min-width: 1200px) {
    justify-content: center;
  }
  }
`;

export const ListWrapper = styled.div`
  @media (max-width: 479px) {
    margin-bottom: 60px;
  }
`;