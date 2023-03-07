import { Form, Label, Input, Select, FieldContainer, Option } from '../Admin/Fields';
import { nanoid } from 'nanoid';
import { Navigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { current } from '../../redux/auth/auth-operations';
import { addProducts, updateProduct } from '../../redux/products/products-operation';
import { ButtonWrapper, Button, LoadingButtonWrapper } from '../Buttons/Buttons';
import { selectIsLoading } from '../../redux/products/products-selectors';

export default function FormAddProducts() {
  const isAdminLogin = useAuth();
  // const loading = useSelector(selectIsLoading);
  const loading = true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch])

  if (!isAdminLogin) {
    return <Navigate to="/login" />
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let k of formData) {
      if (k[0] === '_id' & k[1] === '') {
        formData.delete(k[0])
      }
    }
    dispatch(addProducts(formData));
    for (let item of e.target) {
      item.value = '';
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(e.target.form);
    const formData = new FormData(e.target.form);
    formData.forEach((value, key) => {
      console.log(`key:${key}, value:${value}`)
    })
    dispatch(updateProduct(formData));
    // for (let item of e.target.form) {
    //   item.value = '';
    // }
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
          <Option name="small-stand">Маленький стенд</Option>
          <Option name="big-stand">Великий стенд</Option>
          <Option name="pendant">Кулон</Option>
          <Option name="pin">Пін</Option>
          <Option name="hairpins">Шпилька</Option>
          <Option name="earrings">Сережки</Option>
          <Option name="tapestries">Гобелен</Option>
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
          maxLength="96"
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
          name="_id"
          id={inputId}
          type="text"
        />
      </FieldContainer>
        <FieldContainer>
          <Label>Товар в дорозі</Label>
          <Input
            name="comingSoon"
            type="checkbox"
            id={inputId}
          />
      </FieldContainer>
      <ButtonWrapper>
        <Button isLoading={loading} type="submit">Add product</Button>
        <Button onClick={handleUpdate}>Update product</Button>
      </ButtonWrapper>
      </Form>
      </>
  )
}
