import { useSelector } from 'react-redux';
import { getBusket } from '../../redux/products/products-selectors';
import { nanoid } from 'nanoid';
import BusketItem from './BusketItem';
import { List } from './BusketList.styled';

export default function BusketList() {
  const products = useSelector(getBusket);

  const itemId = nanoid()
    return (
      <List key={itemId}>
        <BusketItem data={products} />
      </List>
    )
};
