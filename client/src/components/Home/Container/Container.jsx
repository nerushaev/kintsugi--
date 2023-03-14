import styled from "styled-components";

const Block = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

export default function Container({children}) {
  return (
    <Block>
      {children}
    </Block>
  )
};
