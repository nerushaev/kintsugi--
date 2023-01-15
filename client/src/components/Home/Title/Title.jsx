import styled from 'styled-components'

const TitleText = styled.h2`
  text-align: center;
  width: 100%;
  background: linear-gradient(90deg, rgb(253, 207, 243, 0), rgb(253, 207, 243, 0.6), rgb(253, 207, 243, 0));
  margin-bottom: 30px;
`;

export default function Title({ text }) {
  return (
    <TitleText>{text}</TitleText>
  )
}
