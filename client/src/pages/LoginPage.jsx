import React from "react";
import styled from "styled-components";
import HeaderAuth from "../components/Auth/HeaderAuth/HeaderAuth";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { Title } from "../components/Home/Products/ListItem.styled";

const Wrapper = styled.div`
  width: 280px;
  height: 100%;
  margin: 0 auto;
  padding: 100px 0;
  // margin-bottom: 50px;
`;

export default function LoginPage() {
  return (
    <Wrapper>
      <HeaderAuth />
    </Wrapper>
  );
}
