// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router"
// import { getItem } from "../../../API/api";
// import { Item, Images, Button, ItemText } from '../GoodsItem/GoodsItem';
// import { nanoid } from "nanoid";

// export const GoodsDetails = () => {
//   const [item, setItem] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const { goodsId } = useParams();

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         setLoading(true);
//         const result = await getItem(goodsId);
//         setItem(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchdata();
//   }, [goodsId])

//   return (
//     <Item key={nanoid()}>
//       <Images src={item.image} alt="" />
//       <ItemText itemName>{item.name}</ItemText>
//       <ItemText>{item.description}</ItemText>
//       <ItemText>{item.price} ₴</ItemText>
//       <Button>Додати у кошик</Button>
//       </Item>
//   )
// }