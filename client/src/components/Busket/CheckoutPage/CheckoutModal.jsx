import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components"
import { Text } from "../../Fields/Fields.styled";
// import { register } from "../../../redux/auth/auth-operations";
import { Inputt } from "./Input";

export const InputWrapper = styled.div`
  background-color: white;
  padding: 15px;
  margin-right: 15px;
  margin-left: 15px;
  text-align: center;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const CheckboxesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export default function CheckoutModal(props) {
  const { setOrderData, orderData, setWillBeRegister } = props;
  const [yes, setYes] = useState(true);
  const [no, setNo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "yes":
        setYes(true);
        setNo(false);
        setWillBeRegister(true);
        break;
      case "no":
        setNo(true);
        setYes(false);
        setWillBeRegister(false);
        break;
      case "password":
        setOrderData(prev => {
          return {
            ...prev,
            password: value
          }
        })
        break;
      case "confirmPassword":
        setOrderData(prev => {
          return {
            ...prev,
            confirmPassword: value
          }
        })
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <InputWrapper>
        <Text accent={true}>Зареєструвати вас на сайті?</Text>
        <CheckboxesWrapper>
          <CheckboxWrapper>
            <Label htmlFor="yes">Так</Label>
            <input name="yes" onChange={handleChange} id="yes" type="checkbox" checked={yes}/>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <Label htmlFor="no">Ні</Label>
            <input name="no" onChange={handleChange} id="no" type="checkbox" checked={no}/>
          </CheckboxWrapper> 
        </CheckboxesWrapper>
        {yes &&
          <>
          <Inputt
            onChange={handleChange}
            label="Пароль:"
            name="password"
            type="password"
            value={orderData.password}
          />
          <Inputt
            onChange={handleChange}
            label="Повторіть пароль:"
            name="confirmPassword"
            type="password"
            value={orderData.confirmPassword}
          />
          </>
        }
      </InputWrapper>
    </div>
  )
}
