import React from 'react'
import BusketList from '../components/Busket/BusketList'
import { ButtonWrapper } from '../components/Buttons/Buttons';
import Title from '../components/Home/Title/Title';
import { NavLink } from 'react-router-dom';
export default function BusketPage() {
  return (
    <>
      <Title text="Додані товари" />
      <BusketList />
      <ButtonWrapper>
        <NavLink to="/checkout">Оформити замовлення</NavLink>
      </ButtonWrapper>
    </>
  )
}
