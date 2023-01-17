import styled from "styled-components"

const IconsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const IconsItem = styled.li`
&:not(:last-child) {
    margin-right: 20px;
  }
`;

const Container = styled.div`
  width: 40px;
  heith: 40px;
`;

export const IconsSet = () => {
  return (
    <IconsList>
      <IconsItem>
        <Container>
        <a target="_blanc" href="https://instagram.com/kintsugi_cosplay?igshid=YmMyMTA2M2Y="> 
        <img src={require("../../../images/instagram-icon.png")} alt="" />
        </a>
        </Container>
      </IconsItem>
      <IconsItem>
        <Container>
        <a target="_blanc" href="https://t.me/kintsugi_cosplay">
        <img src={require("../../../images/telegram-icon.png")} alt="" />
        </a>
        </Container>
      </IconsItem>
      <IconsItem>
        <Container>
        <a target="_blanc" href="https://www.tiktok.com/@kintsugi_cosplay?_t=8XC3AdDiPjh&_r=1">
        <img src={require("../../../images/tiktok-icon.png")} alt="" />
        </a>
        </Container>
      </IconsItem>
    </IconsList>
  )
}