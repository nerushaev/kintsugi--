import styled from "styled-components";

export const FilterPanelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const SortFilterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  color: ${props => props.active ? "red" : "black"};
  padding: 0px 10px;
  height: 30px;
  font-size: 16px;
  &:first-child {
    margin-right: 18px;
  }
`;

export const AllFilterBtn = styled.button`
  background-color: ${props => props.active ? "rgba(255, 175, 204, 1)" : "rgba(162,210,255,1)"};
`;

export const AllFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PriceFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 200px;
  overflow: scroll;
`;

export const FlexFilterWrapper = styled.div`
  
`;

export const PriceBtn = styled.button`
  text-align: start;
  position: relative;
  padding-left: 30px;
  padding-right: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  &::before {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    border: 2px solid red;
    left: 10px;
    top: 9px;
    display: block;
    background-image: ${props => props.active ? "url(https://res.cloudinary.com/dzjmswzgp/image/upload/v1678218288/done-50_r5gofc.png)" : "none"};
    background-size: cover;
  }
`;

export const FilterIcon = styled.svg`
  margin-left: 5px;
  fill: currentColor;
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;