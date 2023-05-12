import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    busket.map(({_id, amount}) => {
      formData.append(_id, amount)
    })
    for(var pair of formData.entries()){
        console.log(pair[0], pair[1]);
    }
    dispatch(orderProducts(formData));
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
          <Label htmlFor="name">
            Ваше ім'я та прізвище:
          </Label>
          <Input
            name="name"
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
          <Label htmlFor="adress">Адреса:</Label>
          <Input placeholder="місто Одеса, відділення 43" type="text" name="adress" />
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
