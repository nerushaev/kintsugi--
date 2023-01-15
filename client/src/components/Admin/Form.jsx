import { Form, Label, Input, Button, Select, FieldContainer, Option } from '../Admin/Fields';
import { nanoid } from 'nanoid';
import { Navigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from '../../redux/auth/auth-operations';
import { addProducts } from '../../redux/products/products-operation';

export default function FormAddProducts() {
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState('');
  // const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('Перука');
  // const [price, setPrice] = useState('');
  // const [_id, setId] = useState('');
  const isAdminLogin = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch])

  if (!isAdminLogin) {
    return <Navigate to="/login" />
  }

  // const handleChange = (e) => {
  // const { name, value } = e.target;

  // switch (name) {
  //   case "name":
  //     return setName(value);
  //   case "amount":
  //     return setAmount(value);
  //   case "description":
  //     return setDescription(value);
  //   case "category":
  //     return setCategory(value);
  //   case "price":
  //     return setPrice(value);
  //   case "id":
  //     return setId(value);
  //   default:
  //     return;
  //   };
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let k of formData) {
      if (k[0] === 'id' & k[1] === '') {
        formData.delete(k[0])
      }
    }
    dispatch(addProducts(formData));
    for (let item of e.target) {
      item.value = '';
    }
  }

  const inputId = nanoid();

  return (
    <>
    <Form name="form" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
      <FieldContainer>
        <Label>Product name</Label>
        <Input
          name="name"
          id="formName"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Hu-Tao Wig"
          required
        />
      </FieldContainer>
      <FieldContainer>
        <Label>Category</Label>
          <Select
          title="Перука"
          name="category"
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
        name="amount"
        id={inputId}
        type="number"
        required />
      </FieldContainer>
      <FieldContainer>
        <Label>Price per one</Label>
        <Input
          name="price"
          id={inputId}
          type="number"
          required />
      </FieldContainer>
      <FieldContainer>
        <Label>Description</Label>
        <Input
          name="description"
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
          id={inputId}
          type="text"
        />
      </FieldContainer>
      <Button>Add product</Button>
      </Form>
      </>
  )
}
