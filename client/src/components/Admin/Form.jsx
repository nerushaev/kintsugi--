import { Form, Label, Input, Button, Select, FieldContainer, Option } from '../Admin/Fields';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { addItem, getCurrent } from '../../API/api';
import { Navigate } from 'react-router';

export default function FormAddProducts() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('wigs');
  const [price, setPrice] = useState('');

  const [isUserLogin, setIsUserLogin] = useState();

  const adminToken = localStorage.getItem('kintsugi-token');

  useEffect(() => {
    async function currentUser() {
      try {
      const isLoggin = await getCurrent(adminToken);
        if (isLoggin) {
        setIsUserLogin(true);
      }
    } catch (error) {
      setIsUserLogin(false);
      console.log(error.message);
    }
    }
    currentUser(adminToken)
  }, [])
  
  if (!isUserLogin) {
    return <Navigate to="/login" />
  }

  const handleChange = (e) => {
  const { name, value } = e.target;

  switch (name) {
    case "name":
      return setName(value);
    case "amount":
      return setAmount(value);
    case "description":
      return setDescription(value);
    case "category":
      return setCategory(value);
    case "price":
      return setPrice(value);
    default:
      return;
    };
  };

  const handleSubmit = async(e) => {
    e.preventDefault()

    const newProduct = {
      name,
      amount,
      description,
      category,
      price,
    };

    try {
      const result = await addItem(JSON.stringify(newProduct));
      if (result) {
        setName('');
        setAmount('');
        setDescription('');
        setCategory('wigs');
        setPrice('');
        return result;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const inputId = nanoid();

  return (
    <>
    <Form form-action={handleSubmit} onSubmit={handleSubmit}>
      <FieldContainer>
        <Label>Product name</Label>
        <Input
        name="name"
        id={inputId}
        type="text"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Hu-Tao Wig"
        required />
      </FieldContainer>
      <FieldContainer>
        <Label>Category</Label>
        <Select
          value={category}
          name="category"
          onChange={handleChange}
        >
          <Option name="wigs">Перука</Option>
          <Option name="costume">Костюм</Option>
          <Option name="accessories">Аксессуар</Option>
          <Option name="other">Іньше</Option>
        </Select>
      </FieldContainer>
      <FieldContainer>
        <Label>Amount</Label>
        <Input
        value={amount}
        name="amount"
        id={inputId}
        onChange={handleChange}
        type="number"
        required />
      </FieldContainer>
      <FieldContainer>
        <Label>Price per one</Label>
        <Input
        value={price}
        name="price"
        onChange={handleChange}
        id={inputId}
        type="number"
        required />
      </FieldContainer>
      <FieldContainer>
        <Label>Description</Label>
        <Input
        value={description}
        name="description"
        onChange={handleChange}
        id={inputId}
        type="text"
        required />
      </FieldContainer>
      <FieldContainer>
        <Label>Image</Label>
        <Input
        name="image"
        id={inputId}
        type="file"
        />
      </FieldContainer>
      <Button>Add product</Button>
      </Form>
      </>
  )
}
