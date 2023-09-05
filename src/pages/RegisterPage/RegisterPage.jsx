import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import RegisterForm from "../../components/Auth/RegisterForm";
import Loader from "../../components/Loader/Loader";
import { selectIsLoading } from "../../redux/auth/auth-selectors";

const Wrapper = styled.div`
  width: 400px;
  height: 100%;
  margin: 0 auto;
  padding: 50px 0;
`;

export default function RegisterPage() {
  const loading = useSelector(selectIsLoading);

  return (
    <Wrapper>
      {loading && <Loader />}
      <RegisterForm />
    </Wrapper>
  );
}
