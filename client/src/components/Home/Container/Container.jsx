import styled from "styled-components";

const Block = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  margin: 0 auto;
`;

export default function Container({children}) {
  return (
    <Block>
      {children}
    </Block>
  )
};
