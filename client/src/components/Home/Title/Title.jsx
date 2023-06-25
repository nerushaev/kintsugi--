import styled from 'styled-components'

const TitleText = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
`;

export default function Title({ text }) {
  return (
    <TitleText>{text}</TitleText>
  )
}
