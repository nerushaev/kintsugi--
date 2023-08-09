import React, { useEffect } from "react";
import { useState } from "react";
import {
  CityItem,
  CityList,
} from "../../../Busket/CheckoutPage/DropdownMenu.styled";
import { Inputt } from "../../../Busket/CheckoutPage/Input";
import { Form } from "../../../Fields/Fields.styled";
import { Button, ButtonWrapper } from "../../../Buttons/Buttons";
import { updateUser } from "../../../../redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { deliveryDataValidation } from "../../../../helpers/deliveryDataValidation";
import { Notify } from "notiflix";
import {
  getCities,
  getWarehouses,
} from "../../../../redux/nova/nova-operation";
import {
  selectCities,
  selectNovaState,
  selectWarehouses,
} from "../../../../redux/nova/nova-selectors";
import {
  removeCitiesList,
  removeWarehousesList,
  selectCity,
  selectWarehouse,
} from "../../../../redux/nova/nova-slice";

export default function DeliveryData({ user }) {
  const [city, setCity] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const warehouses = useSelector(selectWarehouses);
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();
  const [cityInputDisabled, setCityInputDisabled] = useState(false);
  const [warehouseInputDisabled, setWarehouseInputDisabled] = useState(false);
  const [userEdit, setUserEdit] = useState(false);
  const nova = useSelector(selectNovaState);
  const { delivery } = user;
  console.log("delivery", delivery);

  useEffect(() => {
    if (!delivery || userEdit) {
      if (city.length >= 2 && !cityInputDisabled) {
        dispatch(getCities(city));
      }

      if (warehouse.length >= 1 && !warehouseInputDisabled) {
        dispatch(getWarehouses({ warehouse, city }));
      }
    } else if (delivery && !userEdit) {
      deliveryDataValidation
        .validate(delivery)
        .then(() => {
          setCity(delivery.city);
          setWarehouse(delivery.warehouse);
          setCityInputDisabled(true);
          setWarehouseInputDisabled(true);
        })
        .catch((e) => console.log(e.message));
    }
  }, [
    city,
    warehouse,
    cityInputDisabled,
    delivery,
    dispatch,
    userEdit,
    warehouseInputDisabled,
  ]);

  const handleWarehouse = (ShortAddress, Ref, WarehouseIndex, Description) => {
    dispatch(
      selectWarehouse({ ShortAddress, Ref, WarehouseIndex, Description })
    );
    dispatch(removeWarehousesList());
    setWarehouseInputDisabled(true);
    setWarehouse(Description);
  };

  const handleCity = (city, cityRef) => {
    dispatch(selectCity({ city, cityRef }));
    dispatch(removeCitiesList());
    setCityInputDisabled(true);
    setCity(city);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "city":
        return setCity(value);
      case "warehouse":
        return setWarehouse(value);
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deliveryDataValidation
      .validate(nova)
      .then(() => {
        dispatch(updateUser(nova));
        setUserEdit(false);
      })
      .catch((e) => {
        Notify.failure(e.message);
      });
  };

  const clearInputs = async () => {
    setUserEdit(true);
    setCityInputDisabled(false);
    setWarehouseInputDisabled(false);
    setCity("");
    setWarehouse("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Inputt
        name="city"
        type="text"
        label="Ваше місто:"
        placeholder="Одеса"
        onChange={handleChange}
        value={city}
        disabled={cityInputDisabled}
      />
      {cities.length !== 0 && (
        <CityList disable={false}>
          {cities.map((item) => {
            const city = item.Description;
            const cityRef = item.Ref;
            return (
              <CityItem
                data-city-ref={item.Ref}
                key={item.Description}
                onClick={() => handleCity(city, cityRef)}
              >
                {item.Description}
              </CityItem>
            );
          })}
        </CityList>
      )}
      <Inputt
        name="warehouse"
        type="text"
        label="Відділення:"
        placeholder="54"
        onChange={handleChange}
        value={warehouse}
        disabled={warehouseInputDisabled}
      />
      {warehouses.length !== 0 && (
        <CityList disable={false}>
          {warehouses.map((item) => {
            const { ShortAddress, Ref, WarehouseIndex, Description } = item;
            return (
              <CityItem
                key={item.Description}
                onClick={() =>
                  handleWarehouse(
                    ShortAddress,
                    Ref,
                    WarehouseIndex,
                    Description
                  )
                }
              >
                {item.Description}
              </CityItem>
            );
          })}
        </CityList>
      )}
      <ButtonWrapper>
        <Button type="button" onClick={clearInputs} disabled={userEdit}>
          Очистити поля
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button type="submit" onSubmit={handleSubmit}>
          Змінити
        </Button>
      </ButtonWrapper>
    </Form>
  );
}
