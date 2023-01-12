import styled from "styled-components";
import { IconsSet } from "./IconsSet";

const FooterWrapper = styled.footer`
  amrgin-top: auto;
  padding-bottom: 20px;
  padding-top: 20px;
  background-color: rgb(72,61,139);
`;

const Text = styled.p`
  text-align: center;
  color: white;
`;

const Footer = () => {

  return (
    <FooterWrapper>
      <IconsSet />
      <Text>Kintsugi</Text>
      </FooterWrapper>
  )
}

export default Footer;