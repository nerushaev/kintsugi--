import styled from "styled-components";

export const OrderWrapper = styled.div`
`;

export const CheckoutWrapper = styled.div`
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ProductsItem = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ProductsItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

export const ProductsItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

export const FieldWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 400;
  line-height: 20px;
  max-width: 240px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  min-width: 280px;
  height: 30px;
  border-radius: none;
  border: 1px solid black;
  padding-left: 10px;
`;

export const Select = styled.div`
  display: flex;
  justify-content: space-between;
  align-items; center;
  &:not(:last-child) {
    margin-bottom: 20px;
  } 
`;

export const Checkbox = styled.div`
  content: '';
  width: 20px;
  height: 20px;
  border: 1px solid black;
`;