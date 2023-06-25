import styled from "styled-components";

export const OrderWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const Form = styled.form`

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
    @media (min-width: 768px) {
      &:not(:last-child) {
    margin-bottom: 30px;
  }
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
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1200px) {
    width: 250px;
    height: 250px;
  }
`;

export const FieldWrapper = styled.div`
  margin-bottom: 30px;
  display: ${props => props.select ? "flex" : ""};
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 20px;
  margin-bottom: ${props => props.noMargin ? "0" : "10px"};

    @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
    @media (min-width: 1200px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const ProductName = styled.h2`
  display: inline-block;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 20px;
  margin-bottom: ${props => props.noMargin ? "0" : "10px"};

    @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
    @media (min-width: 1200px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: ${props => props.accent ? "500" : "400"};
  line-height: 20px;
  max-width: 240px;
  display: inline-block;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
    @media (min-width: 768px) {
    font-size: 20px;
    &:not(:last-child) {
    margin-bottom: 20px;
  }
  }
    @media (min-width: 1200px) {
    font-size: 26px;
    margin-bottom: 20px;
    line-height: 26px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  border-radius: none;
  border: 1px solid black;
  padding-left: 10px;
    @media (min-width: 768px) {
      height: 40px;
    }

    @media (min-width: 1200px) {
    height: 50px;
  }
`;

export const Select = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  &:not(:last-child) {
    margin-bottom: 20px;
  } 
`;

export const Checkbox = styled.div`
  content: '';
  width: 20px;
  height: 20px;
  border: ${props => props.active ? "1px solid red" : "1px solid black"} ;
    @media (min-width: 768px) {
      width: 30px;
      height: 30px;
    }

`;