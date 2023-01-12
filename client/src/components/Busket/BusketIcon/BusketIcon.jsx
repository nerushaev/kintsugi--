import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useBusket } from '../../../context/busketState';

const BusketContainer = styled.div`
  width: 70px;
  height: 70px;
  z-index: 50;
  position: fixed;  
  background-color: white;
  border-radius: 100%;
  bottom: 10px;
  right: 10px;
`;

const BusketImg = styled.img`
  z-index: 50;
  position: fixed;
  width: 50px;
  heigth: 50px;
  bottom: 20px;
  right: 20px;
`;

const BusketAmount = styled.p`
  z-index: 50;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export default function Busket() {
  const { busket } = useBusket();

  return (
    <Link to="/busket">
    <BusketContainer>
    <BusketAmount>{busket.length}</BusketAmount>
    <BusketImg src={require("../../../images/shopping-busket.png")} alt="" />
    </BusketContainer>
    </Link>
  )
}
