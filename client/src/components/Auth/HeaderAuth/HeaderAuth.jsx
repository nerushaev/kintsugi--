import { Notify } from "notiflix";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loginSchema } from "../../../helpers/loginValidation";
import { notifyOptions } from "../../../helpers/notifyConfig";
import { login } from "../../../redux/auth/auth-operations";
import { selectError } from "../../../redux/auth/auth-selectors";
import { theme } from "../../../styles/theme";
import AuthDynamicLink from "../AuthDynamicLink";

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
  const error = useSelector(selectError);

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
    loginSchema
      .validate({ email, password })
      .then((res) => {
        dispatch(login({ email, password }));
      })
      .catch((e) => {
        Notify.failure(e.message, notifyOptions);
      });
  };

  // if (isLoggedIn) {
  //   return <Navigate to="/user" />;
  // }

  return (
    <>
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
      {error && (
        <AuthDynamicLink redirectTo={"/restore"} message={"Забули пароль?"} />
      )}
    </>
  );
}
