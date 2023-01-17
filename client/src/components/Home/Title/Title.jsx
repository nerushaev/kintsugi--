import styled from 'styled-components'

const TitleText = styled.h2`
  text-align: center;
  width: 100%;
  background: linear-gradient(90deg, rgba(255, 175, 204, 0), rgba(255, 175, 204, 0.6), rgba(255, 175, 204, 0));
  margin-bottom: 30px;
`;

export default function Title({ text }) {
  return (
    <TitleText>{text}</TitleText>
  )
}
