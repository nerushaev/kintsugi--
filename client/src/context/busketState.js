import { createContext, useState, useContext } from "react";

const BusketContext = createContext();

export const useBusket = () => useContext(BusketContext);

export default function BusketState({children}) {
  const [busket, setBusket] = useState([]);
  const checkDublicate = (id) => {
    if (busket.length === 0) {
      return;
    }
    const result = busket.includes(id);
    return result;
  }
  const addToBusket = (e) => {
    const {id} = e.target.id;
    if (checkDublicate(id)) {
      return;
    }
    if (busket.length === 0) {
      setBusket([id]);
    }
    const oldBusket = busket;
    setBusket([...oldBusket, id]);
  }

  const removeFromBusket = (id) => {
    const filteredBusket = busket.filter(item => item !== id);
    setBusket(filteredBusket);
  }

  return (
    <BusketContext.Provider value={{ addToBusket, removeFromBusket, busket }}>
      {children}
    </BusketContext.Provider>
  )
}
