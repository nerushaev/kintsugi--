import { Form, Label, Input, Button, Select, FieldContainer, Option } from '../Admin/Fields';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from '../../redux/auth/auth-operations';
import { addProducts, updateProduct } from '../../redux/products/products-operation';

export default function FormAddProducts() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('wigs');
  const [price, setPrice] = useState('');
  const [_id, setId] = useState('');
  const isAdminLogin = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch])

  if (!isAdminLogin) {
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
    case "id":
      return setId(value);
    default:
      return;
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!_id) {
      console.log(!_id);
      dispatch(addProducts({ name, amount, description, category, price }));
      setName('');
      setAmount('');
      setDescription('');
      setCategory('wigs');
      setPrice('');
      setId('');
    } else {
      dispatch(updateProduct({ _id, name, amount, description, category, price }));
      setName('');
      setAmount('');
      setDescription('');
      setCategory('wigs');
      setPrice('');
      setId('');
    }
  }

  const inputId = nanoid();

  return (
    <>
    <Form onSubmit={handleSubmit}>
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
      <FieldContainer>
        <Label>Id</Label>
        <Input
        name="id"
        value={_id}
        onChange={handleChange}
        id={inputId}
        type="text"
        />
      </FieldContainer>
      <Button>Add product</Button>
      </Form>
      </>
  )
}
