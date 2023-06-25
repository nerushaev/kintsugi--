import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NOVA_API_KEY } from '../../../API/nova';
import { orderProducts } from '../../../redux/products/products-operation';
import { getBusket } from '../../../redux/products/products-selectors';
import { ButtonWrapper, Button } from '../../Buttons/Buttons';
import {
  Label,
  OrderWrapper,
  ProductsList,
  ProductsItem,
  ProductsItemImage,
  ProductsItemTextWrapper,
  FieldWrapper,
  Input,
  Text,
  Select,
  Form,
} from '../../Fields/Fields.styled';
import { CityItem, CityList } from './DropdownMenu.styled';

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [nova, setNova] = useState(true);
  const [afina, setAfina] = useState(false);
  const [cod, setCod] = useState(false);
  const [liqpay, setLiqpay] = useState(true);
  const [adress, setAdress] = useState('');
  const busket = useSelector(getBusket);
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState('');
  const [departmentsList, setDepartmentsList] = useState([]);
  const [warehouse, setWarehouse] = useState('');

  const cityInputRef = useRef(null);
  const departmentsInputRef = useRef(null);

  const fetchDepartments = async () => {
      try {
        const { data } = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: NOVA_API_KEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: city,
          Limit: 10,
          Page: 1,
          WarehouseId: departmentsInputRef.current.value
        }
      });
        setDepartmentsList(data.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  useEffect(() => {
    fetchDepartments();
  }, [city])

  let elements;
  if (busket) { 
  elements = busket.map(({ image, name, price, amount }) => {
    return <ProductsItem key={image}>
      <ProductsItemImage src={image[0]} alt="" />
      <ProductsItemTextWrapper>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{amount}</Text>
      </ProductsItemTextWrapper>
    </ProductsItem>
  })
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "phone":
        return setPhone(value);
      case "name":
        return setName(value);
      case "adress":
        return setAdress(value);
      case "nova":
        if (nova) {
          setAfina(true);
          return setNova(false);
        }
          setAfina(false)
          return setNova(true);
      case "afina":
        if (afina) {
            setNova(true);
            return setAfina(false);
        }
        setNova(false);
        return setAfina(true);
      case "cod":
        if (cod) {
          setLiqpay(true);
          return setCod(false);
        }
          setLiqpay(false)
        return setCod(true);
      case "liqpay":
        if (liqpay) {
          setLiqpay(false);
          return setCod(true);
        }
          setLiqpay(true)
        return setCod(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    busket.map(({ _id, amount }) => {
      formData.append('product', `${_id} ${amount}`)
    })
    for(var pair of formData.entries()){
        console.log(pair[0], pair[1]);
    }
    dispatch(orderProducts(formData));
  }

  const handleAdress = async (e) => {
    if (e.target.value.length > 2) {
      try {
      const { data } = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: NOVA_API_KEY,
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
          CityName: e.target.value,
          Limit: 5,
          Page: 1
        }
      });
      console.log(data.data[0].Addresses);
      setCityList(data.data[0].Addresses);
      setCity(data.data[0].Addresses.MainDescription);
    } catch (error) {
      console.log(error.message);
    }
    }
  }
      console.log(city);

  const handleCity = (...args) => {
    console.log(args);
    cityInputRef.current.value = args[1];
    setCityList([]);
    setCity(args[0]);
  }

  const handleDepartments = () => {
    fetchDepartments();
  }

  const handleDepartment = (...args) => {
    console.log(args);
    setWarehouse(warehouse);
    departmentsInputRef.current.value = args[0];
    setDepartmentsList([]);
  }
  
  return (
    <>
    <OrderWrapper>
      <ProductsList>
      <Label>Ваше замовлення:</Label>
      {elements}
      </ProductsList>
      <Form onSubmit={handleSubmit} onChange={handleChange} onSubmit={handleSubmit}>
      <FieldWrapper>
          <Label
            htmlFor="phone">Ваш номер телефона:
          </Label>
          <Input
            name="phone"
            type="phone"
            placeholder="+3809663454392"
          />
      </FieldWrapper>
      <FieldWrapper>
          <Label htmlFor="client">
            Ваше ім'я та прізвище:
          </Label>
          <Input
            name="client"
            type="text"
            placeholder="Ім'я Прізвище" />
          </FieldWrapper>
          <Text accent={true}>Доставка:</Text>
          <FieldWrapper select>
            <Label noMargin htmlFor="nova">Нова Пошта</Label>
            <Select name="nova" type="checkbox" onChange={handleChange} checked={nova}></Select>
          </FieldWrapper>
          <FieldWrapper select>
            <Label noMargin htmlFor="afina">Самовівіз м.Одеса, ТЦ Афіна 4-й поверх</Label>
            <Select name="afina" type="checkbox" onChange={handleChange} checked={afina}></Select>
          </FieldWrapper>
          <FieldWrapper>
          <Label htmlFor="city">Адреса:</Label>
            <Input ref={cityInputRef} onChange={handleAdress} placeholder="місто Одеса, відділення 43" type="text" name="city"/>
            {cityList.length !== 0 && 
            <CityList>
              {cityList.map(item => {
                return <CityItem key={item.Present} onClick={() => handleCity(item.MainDescription, item.Present)}>{item.Present}</CityItem>
              })}
            </CityList>
            }
          </FieldWrapper>
          <Text accent={true}>Відділення:</Text>
          <FieldWrapper>
            <Input onChange={handleDepartments} ref={departmentsInputRef} placeholder="Відділення 45" type="text" name="warehouse" />
            {city && departmentsList.length !== 0 && 
              <CityList>
              {departmentsList.map(item => {
                console.log(item);
                return <CityItem onClick={() => handleDepartment(item.Description)} key={item.Description}>{item.Description}</CityItem>
                })}
              </CityList>
            }
          </FieldWrapper>
          <Text accent={true}>Оплата:</Text>
          <FieldWrapper select>
            <Label noMargin htmlFor="cod">Накаладений платіж</Label>
            <Select name="cod" type="checkbox" onChange={handleChange} checked={cod}></Select>
          </FieldWrapper>
          <FieldWrapper select>
            <Label noMargin htmlFor="liqpay">Онлайн оплата LiqPay</Label>
            <Select name="liqpay" type="checkbox" onChange={handleChange} checked={liqpay}></Select>
          </FieldWrapper>
          <ButtonWrapper>
            <Button type="submit">Замовити</Button>
          </ButtonWrapper>
    </Form>
    </OrderWrapper>

    </>
  )
}
