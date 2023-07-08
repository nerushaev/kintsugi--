import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NOVA_API_KEY } from "../../../API/nova";
import { orderProducts } from "../../../redux/products/products-operation";
import {
  getBusket,
  selectBusketProductsId,
} from "../../../redux/products/products-selectors";
import { ButtonWrapper, Button } from "../../Buttons/Buttons";
import {
  Label,
  OrderWrapper,
  ProductsList,
  ProductsItem,
  ProductsItemImage,
  ProductsItemTextWrapper,
  Text,
  Form,
} from "../../Fields/Fields.styled";
import { CityItem, CityList } from "./DropdownMenu.styled";
import {
  checkoutPageValidation,
  passwordsValidation,
} from "../../../helpers/checkoutPageValidation";
import { Notify } from "notiflix";
import { Inputt } from "./Input";
import { SelectInput } from "./SelectInput";
import { AuthInstance } from "../../../API/api";
import CheckoutModal, { CheckoutWrapper } from "./CheckoutModal";
import { selectIsLoading } from "../../../redux/products/products-selectors";
import { register } from "../../../redux/auth/auth-operations";
import { notifyOptions } from "../../../helpers/notifyConfig";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const busket = useSelector(getBusket);
  const loading = useSelector(selectIsLoading);
  const productsData = useSelector(selectBusketProductsId);
  const [cities, setCities] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [willBeRegister, setWillBeRegister] = useState(true);
  const [orderData, setOrderData] = useState({
    email: "",
    name: "",
    phone: "",
    nova: true,
    afina: false,
    cash: false,
    liqpay: true,
    city: "",
    cityRef: "",
    warehouse: "",
    warehouseAddress: "",
    recipientWarehouseIndex: "",
    warehouseRef: "",
    password: "",
    confirmPassword: "",
    products: productsData,
  });

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const { data } = await AuthInstance.post(
          "https://api.novaposhta.ua/v2.0/json/",
          {
            apiKey: NOVA_API_KEY,
            modelName: "Address",
            calledMethod: "getCities",
            methodProperties: {
              FindByString: orderData.city,
              Limit: 5,
              Page: 1,
            },
          }
        );
        if (data.data.length === 1) {
          setOrderData((prev) => {
            return {
              ...prev,
              cityRef: data.data[0].Ref,
              city: data.data[0].Description,
            };
          });
        }
        setCities(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchWarehouses = async () => {
      try {
        const { data } = await AuthInstance.post(
          "https://api.novaposhta.ua/v2.0/json/",
          {
            apiKey: NOVA_API_KEY,
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
              WarehouseId: orderData.warehouse,
              CityName: orderData.city,
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

    if (orderData.city.length > 2 && cities.length === 0) {
      fetchCities();
    } else if (orderData.city.length === 0 && cities.length > 0) {
      setOrderData((prev) => {
        return {
          ...prev,
          city: "",
        };
      });
      setCities([]);
    }

    if (orderData.city.length > 2) {
      fetchWarehouses();
    } else if (orderData.warehouse.length === 0 && warehouses.length > 0) {
      setWarehouses([]);
      setOrderData((prev) => {
        return {
          ...prev,
          warehouse: "",
        };
      });
    }
  }, [cities, warehouses.length, orderData.city, orderData.warehouse]);

  let elements;
  if (busket) {
    elements = busket.map(({ image, name, price, amount }) => {
      return (
        <ProductsItem key={image}>
          <ProductsItemImage src={image[0]} alt="" />
          <ProductsItemTextWrapper>
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>{amount}</Text>
          </ProductsItemTextWrapper>
        </ProductsItem>
      );
    });
  }

  const handleWarehouse = (e) => {
    const { innerHTML } = e.target;
    const recipientWarehouseIndex = e.target.getAttribute(
      "data-warehouse-index"
    );
    const warehouseRef = e.target.getAttribute("data-warehouse-ref");
    const warehouseAddress = e.target.getAttribute("data-warehouse-address");
    console.log(warehouseRef);
    setOrderData((prev) => {
      return {
        ...prev,
        warehouse: innerHTML,
        recipientWarehouseIndex,
        warehouseRef,
        warehouseAddress,
      };
    });
    const result = isSameWarehouse(warehouses, warehouseRef);
    setWarehouses([]);
  };

  const handleCity = (e) => {
    const { innerHTML } = e.target;
    const cityRef = e.target.getAttribute("data");
    setOrderData((prev) => {
      return {
        ...prev,
        city: innerHTML,
        cityRef: cityRef,
      };
    });
    setCities([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await checkoutPageValidation
      .validate(orderData)
      .then((result) => {
        dispatch(orderProducts(orderData));
      })
      .catch((error) => {
        Notify.failure(error.message, notifyOptions);
      });

    if (willBeRegister) {
      const passResult = await passwordsValidation
        .validate({
          email: orderData.email,
          confirmPassword: orderData.confirmPassword,
          password: orderData.password,
        })
        .then((result) => {
          dispatch(
            register({
              email: orderData.email,
              name: orderData.name,
              password: orderData.password,
            })
          );
        })
        .catch((error) => {
          Notify.failure(error.message, notifyOptions);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return setOrderData((prev) => {
          return {
            ...prev,
            email: value,
          };
        });
      case "name":
        return setOrderData((prev) => {
          return {
            ...prev,
            name: value,
          };
        });
      case "phone":
        return setOrderData((prev) => {
          return {
            ...prev,
            phone: value,
          };
        });
      case "nova":
        return setOrderData((prev) => {
          return {
            ...prev,
            nova: !prev.nova,
            afina: !prev.afina,
          };
        });
      case "afina":
        return setOrderData((prev) => {
          return {
            ...prev,
            afina: !prev.afina,
            nova: !prev.nova,
          };
        });
      case "city":
        return setOrderData((prev) => {
          return {
            ...prev,
            city: value,
          };
        });
      case "warehouse":
        return setOrderData((prev) => {
          return {
            ...prev,
            warehouse: value,
          };
        });
      case "cash":
        return setOrderData((prev) => {
          return {
            ...prev,
            cash: !prev.cash,
            liqpay: !prev.liqpay,
          };
        });
      case "liqpay":
        return setOrderData((prev) => {
          return {
            ...prev,
            liqpay: !prev.liqpay,
            cash: !prev.cash,
          };
        });
      case "password":
        return setOrderData((prev) => {
          return {
            ...prev,
            password: value,
          };
        });
      case "confirmPassword":
        return setOrderData((prev) => {
          return {
            ...prev,
            confirmPassword: value,
          };
        });
      default:
        return;
    }
  };

  const isSameCities = cities.length
    ? orderData.city.length === cities[0].Description.length
    : null;

  function isSameWarehouse(warehouses, warehouse) {
    console.log(warehouses, warehouse);
    const result = warehouses.filter((item) => {
      if (item.WarehouseIndex === warehouse) {
        console.log(true);
      }
    });
    return result;
  }

  return (
    <>
      <OrderWrapper>
        <ProductsList>
          <Label>Ваше замовлення:</Label>
          {elements}
        </ProductsList>
        <Form checkout onSubmit={handleSubmit}>
          <Inputt
            name="email"
            type="email"
            label="Ваша пошта:"
            placeholder="youremail@gmail.com"
            onChange={handleChange}
            value={orderData.email}
          />
          <Inputt
            name="name"
            type="text"
            label="Введіть ваше П.І.Б:"
            placeholder="Чепіль Анастасія Олександрівна"
            onChange={handleChange}
            value={orderData.name}
          />
          <Inputt
            name="phone"
            type="phone"
            label="Ваш номер телефону:"
            placeholder="+380963332333"
            onChange={handleChange}
            value={orderData.phone}
          />
          <SelectInput
            text="Доставка:"
            names={["nova", "afina"]}
            type="checkbox"
            onChange={handleChange}
            value={[orderData.nova, orderData.afina]}
            label={["Нова Пошта", "Самовівіз м.Одеса, ТЦ Афіна 4-й поверх"]}
          />
          <Inputt
            name="city"
            type="text"
            label="Ваше місто:"
            placeholder="Одеса"
            onChange={handleChange}
            value={orderData.city}
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
            value={orderData.warehouse}
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
          <SelectInput
            text="Оплата:"
            names={["cash", "liqpay"]}
            type="checkbox"
            onChange={handleChange}
            value={[orderData.cash, orderData.liqpay]}
            label={["Накаладений платіж", "Онлайн оплата LiqPay"]}
          />
        </Form>
      </OrderWrapper>
      <CheckoutWrapper>
        <CheckoutModal
          setWillBeRegister={setWillBeRegister}
          willBeRegister={willBeRegister}
          orderData={orderData}
          setOrderData={setOrderData}
        />
        <ButtonWrapper>
          <Button type="submit" onSubmit={handleSubmit}>
            {willBeRegister ? "Замовити і зареєструватись" : "Замовити"}
          </Button>
        </ButtonWrapper>
      </CheckoutWrapper>
    </>
  );
}
