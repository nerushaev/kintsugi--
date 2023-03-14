import styled from "styled-components";

const ErrorWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const ErrorText = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export default function ErrorMessage({message}) {
  return (
    <ErrorWrapper>
      <ErrorText>{message}</ErrorText>
    </ErrorWrapper>
  )
}
