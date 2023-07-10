import { useState } from "react";
import styled from "styled-components";
import { Inputt } from "../Busket/CheckoutPage/Input";
import { Form } from "../Fields/Fields.styled";
import { ButtonWrapper, Button } from "../../components/Buttons/Buttons";
import { registerValidation } from "../../helpers/registerPageValidation";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import { Notify } from "notiflix";
import { notifyOptions } from "../../helpers/notifyConfig";
import { selectError } from "../../redux/auth/auth-selectors";

const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    phone: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const error = useSelector(selectError);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case name:
        setUserData((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerValidation
      .validate(userData)
      .then((res) => {
        const registerData = {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
        };
        dispatch(register(registerData));
        if (!error) {
          setTimeout(
            Notify.success("регістрація пройшла успішно!", {
              borderRadius: "0px",
            }),
            20000
          );
        }
      })
      .catch((error) => {
        Notify.failure(error.message, notifyOptions);
      });
  };

  return (
    <RegisterWrapper>
      <Form onSubmit={handleSubmit}>
        <Inputt
          name="email"
          type="email"
          label="Ваша пошта:"
          placeholder="youremail@gmail.com"
          onChange={handleChange}
          value={userData.email}
        />
        <Inputt
          name="phone"
          type="phone"
          label="Ваш номер телефону:"
          placeholder="+380963332333"
          onChange={handleChange}
          value={userData.phone}
        />
        <Inputt
          name="name"
          type="text"
          label="Введіть ваше П.І.Б:"
          placeholder="Чепіль Анастасія Олександрівна"
          onChange={handleChange}
          value={userData.name}
        />
        <Inputt
          name="password"
          type="password"
          label="Пароль:"
          placeholder=""
          onChange={handleChange}
          value={userData.password}
        />
        <Inputt
          name="confirmPassword"
          type="password"
          label="Підтвердіть пароль:"
          placeholder=""
          onChange={handleChange}
          value={userData.confirmPassword}
        />
        <ButtonWrapper>
          <Button type="submit" onSubmit={handleSubmit}>
            Зареєструватися
          </Button>
        </ButtonWrapper>
      </Form>
    </RegisterWrapper>
  );
}
