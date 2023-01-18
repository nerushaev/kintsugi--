import React from 'react'
import BusketList from '../components/Busket/BusketList'
import Title from '../components/Home/Title/Title';

export default function BusketPage() {
  return (
    <>
      <Title text="Додані товари" />
      <BusketList />
    </>
  )
}
