import React, { useEffect } from "react";
import { useState } from "react";
import {
  CityItem,
  CityList,
} from "../../../Busket/CheckoutPage/DropdownMenu.styled";
import { Inputt } from "../../../Busket/CheckoutPage/Input";
import { Form } from "../../../Fields/Fields.styled";
import { novaInstance, NOVA_API_KEY } from "../../../../API/nova";
import { Button, ButtonWrapper } from "../../../Buttons/Buttons";
import { updateUser } from "../../../../redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../redux/auth/auth-selectors";

export default function DeliveryData({ user }) {
  const [cities, setCities] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [deliveryData, setDeliveryData] = useState({
    city: "",
    cityRef: "",
    warehouse: "",
    recipientWarehouseIndex: "",
    warehouseRef: "",
    warehouseAddress: "",
  });

  const { city, warehouse } = deliveryData;
  const dispatch = useDispatch();
  const { delivery } = user;

  useEffect(() => {
    if (delivery) {
      setDeliveryData((prev) => ({
        ...prev,
        city: delivery.city || "",
        warehouse: delivery.warehouse || "",
      }));
      setWarehouses([]);
      setCities([]);
    }

    const fetchCities = async () => {
      try {
        const { data } = await novaInstance.post(
          "https://api.novaposhta.ua/v2.0/json/",
          {
            apiKey: NOVA_API_KEY,
            modelName: "Address",
            calledMethod: "getCities",
            methodProperties: {
              FindByString: deliveryData.city,
              Limit: 5,
              Page: 1,
            },
          }
        );
        // if (data.data.length === 1) {
        //   setDeliveryData((prev) => {
        //     return {
        //       ...prev,
        //       cityRef: data.data[0].Ref,
        //       city: data.data[0].Description,
        //     };
        //   });
        // }
        setCities(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchWarehouses = async () => {
      try {
        const { data } = await novaInstance.post(
          "https://api.novaposhta.ua/v2.0/json/",
          {
            apiKey: NOVA_API_KEY,
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
              WarehouseId: deliveryData.warehouse,
              CityName: deliveryData.city,
              Limit: 5,
              Page: 1,
            },
          }
        );
        setWarehouses(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCities();
    fetchWarehouses();
  }, [deliveryData.city, deliveryData.warehouse]);

  const handleWarehouse = (e) => {
    const { innerHTML } = e.target;
    const recipientWarehouseIndex = e.target.getAttribute(
      "data-warehouse-index"
    );
    const warehouseRef = e.target.getAttribute("data-warehouse-ref");
    const warehouseAddress = e.target.getAttribute("data-warehouse-address");
    setDeliveryData((prev) => {
      return {
        ...prev,
        warehouse: innerHTML,
        recipientWarehouseIndex,
        warehouseRef,
        warehouseAddress,
      };
    });
    // const result = isSameWarehouse(warehouses, warehouseRef);
    setWarehouses([]);
  };

  const handleCity = (e) => {
    const { innerHTML } = e.target;
    const cityRef = e.target.getAttribute("data");
    setDeliveryData((prev) => {
      return {
        ...prev,
        city: innerHTML,
        cityRef: cityRef,
      };
    });
    setCities([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case name:
        return setDeliveryData((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(deliveryData));
  };

  const isSameCities = cities.length
    ? city.length === cities[0].Description.length
    : null;

  return (
    <Form onSubmit={handleSubmit}>
      <Inputt
        name="city"
        type="text"
        label="Ваше місто:"
        placeholder="Одеса"
        onChange={handleChange}
        value={city}
      />
      {cities.length !== 0 && (
        <CityList disable={isSameCities}>
          {cities.map((item) => {
            return (
              <CityItem
                data={item.Ref}
                key={item.Description}
                onClick={handleCity}
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
      />
      {warehouses.length !== 0 && (
        <CityList disable={false}>
          {warehouses.map((item) => {
            return (
              <CityItem
                data-warehouse-address={item.ShortAddress}
                data-warehouse-ref={item.Ref}
                data-warehouse-index={item.WarehouseIndex}
                key={item.Description}
                onClick={handleWarehouse}
              >
                {item.Description}
              </CityItem>
            );
          })}
        </CityList>
      )}
      <ButtonWrapper>
        <Button type="submit" onSubmit={handleSubmit}>
          Змінити
        </Button>
      </ButtonWrapper>
    </Form>
  );
}
