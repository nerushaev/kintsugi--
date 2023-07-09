import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

const UserName = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PreTitle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

export default function UserAvatar({ userData }) {
  const { name, email, avatar } = userData;

  return (
    <Wrapper>
      <Avatar
        src={avatar || require("../../../images/image-not-found.jpg")}
        alt=""
      />
      <PreTitle>{email}</PreTitle>
      <UserName>{name}</UserName>
    </Wrapper>
  );
}
