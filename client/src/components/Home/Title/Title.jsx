import styled from 'styled-components'

const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export default function Title({ text }) {
  return (
    <TitleText>{text}</TitleText>
  )
}
