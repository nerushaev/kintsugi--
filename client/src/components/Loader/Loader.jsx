import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(000, 000, 000, 0.5);
  z-index: 600;
`;

const LoaderStyles = styled.span`
  width: 84px;
  height: 84px;
  position: fixed;
  left: 50%;
  top: 40vh;
  z-index: 99;
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(162, 210, 255, 1);
    transform: scale(0);
    animation: push 2s infinite linear;
  }
  &:after {
    animation-delay: 1s;
  }
  @keyframes push {
    0%,
    50% {
      transform: translate(-50%, 0%) scale(1);
    }
    100% {
      transform: translate(-50%, -100%) scale(0);
    }
  }
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <LoaderStyles />
    </LoaderWrapper>
  );
}
