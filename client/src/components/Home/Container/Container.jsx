import styled from "styled-components";

const Block = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export default function Container({children}) {
  return (
    <Block>
      {children}
    </Block>
  )
};
