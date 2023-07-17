import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../../../redux/auth/auth-operations";
import { theme } from "../../../styles/theme";

const Form = styled.form`
  background-color: rgb(255, 200, 221, 0.3);
  padding: 10px;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 1px solid black;
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.small};
  margin-right: 5px;
`;

const Button = styled.button`
  display: block;
  padding: 5px 10px;
  background-color: ${theme.colors.formButton};
  margin-left: auto;
`;

export default function HeaderAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        {
          setEmail(value);
        }
        break;
      case "password": {
        setPassword(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputsWrapper>
        <InputWrapper>
          <Label>Пошта</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Пароль</Label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
          />
        </InputWrapper>
      </InputsWrapper>
      <Button type="submit" onSubmit={handleSubmit}>
        Вхід
      </Button>
    </Form>
  );
}
