import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import styled from "styled-components";
import { useAuth } from "../../../hooks/useAuth";
import { login } from "../../../redux/auth/auth-operations";
import { theme } from "../../../styles/theme";

const Form = styled.form`
  background-color: rgb(255, 200, 221, 0.3);
  padding: 20px;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 1px solid black;
  padding: 10px 10px;
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.small};
  margin-right: 5px;
  font-weight: 600;
`;

const Button = styled.button`
  display: block;
  padding: 5px 10px;
  background-color: ${theme.colors.formButton};
  margin: 0 auto;
`;

export default function HeaderAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useAuth();
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
    dispatch(login({ email, password }));
  };

  if (isLoggedIn) {
    return <Navigate to="/user" />;
  }

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
        <Button type="submit" onSubmit={handleSubmit}>
          Вхід
        </Button>
      </InputsWrapper>
    </Form>
  );
}
