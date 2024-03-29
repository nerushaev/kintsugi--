import React, { useEffect, useRef, useState } from "react";
import {
  FilterPanelWrapper,
  FilterBtn,
  PriceFilterWrapper,
  PriceBtn,
  FilterIcon,
  Section,
} from "./FilterPanel.styled";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/filter/filter-slice";
import svg from "../../../images/filterIcons.svg";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";

const Box = styled.div`

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms cubic-bezier(.17,.67,.83,.67);
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 200ms cubic-bezier(.17,.67,.83,.67);
  }
}`;

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

  const nodeRef = useRef(null);

  useEffect(() => {
    dispatch(setFilter(filters));
  }, [filters, dispatch]);

  const filterButtonsClick = (e) => {
    const { id } = e.target;
    switch (id) {
      case "price":
        setPriceFilter(!priceFilter);
        if (allFilter) {
          setAllFilter(false);
        }
        return;
      case "filter":
        setAllFilter(!allFilter);
        if (priceFilter) {
          setPriceFilter(false);
        }
        return;
      default:
        return;
    }
  };

  const handleAllFilter = (e) => {
    const { id } = e.target;
    if (id === "low" && filters.high) {
      setFilters((prev) => {
        return {
          ...prev,
          low: true,
          high: false,
        };
      });
      return;
    } else if (id === "high" && filters.low) {
      setFilters((prev) => {
        return {
          ...prev,
          low: false,
          high: true,
        };
      });
    } else {
      setFilters((prev) => {
        return {
          ...prev,
          [id]: !prev[id],
        };
      });
    }
  };

  let Child = undefined;
  if (priceFilter) {
    Child = (
      <PriceFilterWrapper onClick={handleAllFilter}>
        <PriceBtn id="low" active={filters.low}>
          По-зростанню
        </PriceBtn>
        <PriceBtn id="high" active={filters.high}>
          По-зменьшенню
        </PriceBtn>
      </PriceFilterWrapper>
    );
  } else if (allFilter) {
    Child = (
      <PriceFilterWrapper allFilter onClick={handleAllFilter}>
        <PriceBtn active={filters.wigs} id="wigs">
          Перука
        </PriceBtn>
        <PriceBtn active={filters.costume} id="costume">
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
    );
  }

  return (
    <Section>
      <FilterPanelWrapper onClick={filterButtonsClick} allFilter={allFilter}>
        <FilterBtn id="price" active={priceFilter}>
          Сортувати за ціною
          <FilterIcon width="18" height="18">
            <use xlinkHref={`${svg}#icon-price`}></use>
          </FilterIcon>
        </FilterBtn>
        <FilterBtn id="filter" filter="true" active={allFilter}>
          Фільтр
          <FilterIcon width="18" height="18">
            <use xlinkHref={`${svg}#icon-filter`}></use>
          </FilterIcon>
        </FilterBtn>
      </FilterPanelWrapper>
      <SwitchTransition>
        <CSSTransition
          key={priceFilter || allFilter ? "Price Filter" : "All Filter"}
          classNames="fade"
          nodeRef={nodeRef}
          timeout={200}
        >
          {() => <Box ref={nodeRef}>{Child}</Box>}
        </CSSTransition>
      </SwitchTransition>
    </Section>
  );
}
