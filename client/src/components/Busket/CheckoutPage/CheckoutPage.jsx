import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../../redux/products/products-operation';
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
  Checkbox,
  Form
} from '../../Fields/Fields.styled';

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [delivery, setDelivery] = useState('');
  const [adress, setAdress] = useState('');
  const [payment, setPayment] = useState('');

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
      case "delivery":
        return setDelivery(value);
      case "adress":
        return setAdress(value);
      case "payment":
        return setPayment(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    busket.map(item => {
      console.log(item);
      dispatch(updateProduct(item));
    });
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
      <FieldWrapper>
          <Label htmlFor="delivery">Доставка:</Label>
          <Select>
            <Text value="nova">Нова Пошта</Text>
            <Checkbox />
          </Select>
          <Select>
            <Text value="afina">Самовівіз м.Одеса, ТЦ Афіна 4-й поверх</Text>
            <Checkbox />
          </Select>
      </FieldWrapper>
      <FieldWrapper>
          <Label htmlFor="adress">Адреса:</Label>
          <Input type="text" name="adress" />
      </FieldWrapper>
      <FieldWrapper>
          <Label htmlFor="payment">Оплата:</Label>
          <Select>
            <Text value="ofline">Накаладений платіж</Text>
            <Checkbox />
          </Select>
          <Select>
            <Text value="online">Онлайн оплата LiqPay</Text>
            <Checkbox />
          </Select>
        </FieldWrapper>
    </Form>
    </OrderWrapper>
    <ButtonWrapper>
        <Button type="submit">Оформити замовлення</Button>
      </ButtonWrapper>
    </>
  )
}
