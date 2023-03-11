import { useEffect, useState } from "react"
import {
  AllFilterWrapper,
  FlexFilterWrapper, 
  AllFilterBtn, 
  FilterPanelWrapper, 
  SortFilterWrapper, 
  FilterBtn, 
  PriceFilterWrapper,
  PriceBtn,
  FilterIcon,
  Section
} from './FilterPanel.styled';
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/filter/filter-slice";
import svg from '../../../images/filterIcons.svg';

export default function FilterPanel() {
  const dispatch = useDispatch();
  //общий стейт
  const [filters, setFilters] = useState({
    wigs: false,
    costume: false,
    accessories: false,
    smallStand: false,
    bigStand: false,
    pendant: false,
    pin: false,
    hairpins: false,
    earrings: false,
    tapestries: false,
    other: false,
  });
  //стейт для кнопки "Сортировать по цене"
  const [priceFilter, setPriceFilter] = useState(false);
  //стейт для кнопки "Фильтр"
  const [allFilter, setAllFilter] = useState(false);

  useEffect(() => {
    dispatch(setFilter(filters))
  }, [filters, dispatch]);

  const handlePriceFilterBtn = () => {
    setPriceFilter(!priceFilter);
  }

  const handlePriceFilter = (e) => {
    const { id } = e.target;
    switch (id) {
      case "low":
        setFilters(prev => { return { ...prev, low: true, high: false } });
        return;
      case "high":
        setFilters(prev => { return { ...prev, high: true, low: false } });
        return;
      default:
        return;
    }
  }

  const handleAllFilterBtn = () => {
    setAllFilter(!allFilter)
  }

  const handleAllFilter = (e) => {
    const { id } = e.target;
        setFilters(prev => {
          return {
            ...prev,
            [id]: !prev[id]
          }
    })
  }

  return (
    <Section>
    <FilterPanelWrapper allFilter={allFilter}>
      <SortFilterWrapper>
        <FilterBtn active={priceFilter} onClick={handlePriceFilterBtn}>
          Сортувати за ціною
          <FilterIcon width="18" height="18">
            <use xlinkHref={`${svg}#icon-price`}></use>
          </FilterIcon>
        </FilterBtn>
        {priceFilter && 
        <PriceFilterWrapper onClick={handlePriceFilter}>
          <PriceBtn id="low" active={filters.low}>
            По-зростанню
          </PriceBtn>
          <PriceBtn id="high" active={filters.high}>
            По-зменьшенню
          </PriceBtn>
        </PriceFilterWrapper>
        }
      </SortFilterWrapper>
      <AllFilterWrapper>
        <FilterBtn filter="true" active={allFilter} onClick={handleAllFilterBtn}>
          Фільтр
          <FilterIcon width="18" height="18">
            <use xlinkHref={`${svg}#icon-filter`}></use>
          </FilterIcon>
        </FilterBtn>
        {allFilter && 
          <PriceFilterWrapper allFilter onClick={handleAllFilter}>
          <PriceBtn active={filters.wigs} id="wigs">
            Перука
          </PriceBtn>
          <PriceBtn active={filters.costume}  id="costume">
            Костюм
          </PriceBtn>
          <PriceBtn active={filters.accessories} id="accessories">
            Аксессуар
          </PriceBtn>
          <PriceBtn active={filters.smallStand} id="smallStand">
            Маленький стенд
          </PriceBtn>
          <PriceBtn active={filters.bigStand} id="bigStand">
            Великий стенд
          </PriceBtn>
          <PriceBtn active={filters.pendant} id="pendant">
            Кулон
          </PriceBtn>
          <PriceBtn active={filters.pin} id="pin">
            Пін
          </PriceBtn>
          <PriceBtn active={filters.hairpins} id="hairpins">
            Шпилька
          </PriceBtn>
          <PriceBtn active={filters.earrings} id="earrings">
            Сережки
          </PriceBtn>
          <PriceBtn active={filters.tapestries} id="tapestries">
            Гобелен
          </PriceBtn>
          <PriceBtn active={filters.other} id="other">
            Інше
          </PriceBtn>
        </PriceFilterWrapper>
        }
      </AllFilterWrapper>
      </FilterPanelWrapper>
    </Section>
  )
}
