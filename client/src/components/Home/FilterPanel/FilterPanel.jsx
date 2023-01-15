import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filter-slice';
import { FilterWrapper, FilterButton } from './FilterPanel.styled';

export default function FilterPanel() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(e.target.id);
    dispatch(setFilter(e.target.id));
  }


  return (
    <FilterWrapper onClick={handleSubmit}>
      <FilterButton id="Перука">Перуки</FilterButton>
      <FilterButton id="Костюм">Костюми</FilterButton>
      <FilterButton id="Аксессуар">Аксессуари</FilterButton>
      <FilterButton id="Іньше">Іньше</FilterButton>
    </FilterWrapper>
  )
}
