import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 6px;
  background-color: rgba(162, 210, 255, 1);
  &:not(:last-child) {
    margin-right: 15px;
  }
`;