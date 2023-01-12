// import { useEffect } from 'react';
import {useBusket} from '../../context/busketState'
// import {getItem} from '../../API/api';
import { useState } from 'react';

export default function BusketList() {
  const [items, setItems] = useState([]);
  const { busket } = useBusket();
  
  // const checkDublicate = (id) => {
  //   if (items.length === 0) {
  //     return false;
  //   }
  //   const result = items.map(item => item.id === id);
  //   console.log(result);
  // }

  console.log("busket", busket.join());
  console.log("busket", busket);
  console.log("items", items);

//   useEffect(() => {
//     if (busket.length === 0) {
//       return;
//     }
//     const getBusketItems = async () => {
//       if (busket.length > 1) {
//         try {
//         const data = await getItem(busket.join());
//         console.log(data);
//         setItems([data]);
//       } catch (error) {
//         console.log(error);
//       }
//       }
//       try {
//         const data = await getItem(busket);
//         console.log(data);
//         setItems([data]);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getBusketItems()
//     // const getBusketItems = async() => {
//     //   console.log(checkDublicate(id));
//     // }
// }, [busket]);

  return (
    <ul>
      {items && items.map(({ name, price, image, id }) => {
        return <li key={id}>
          <span>{name}</span>
          <span>{price}</span>
          <img alt="" image={image}></img>
        </li>
      })}
    </ul>
  )
}
