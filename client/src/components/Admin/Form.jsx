import { Select, Option } from "../Admin/Fields";
import { nanoid } from "nanoid";
import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "../../redux/auth/auth-operations";
import {
  addProducts,
  updateProduct,
} from "../../redux/products/products-operation";
import { ButtonWrapper, Button } from "../Buttons/Buttons";
import {
  Label,
  FieldWrapper,
  Input,
} from "../../components/Fields/Fields.styled";

export default function FormAddProducts() {
  const loading = true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let k of formData) {
      if ((k[0] === "_id") & (k[1] === "")) {
        formData.delete(k[0]);
      }
    }
    dispatch(addProducts(formData));
    for (let item of e.target) {
      item.value = "";
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(e.target.form);
    const formData = new FormData(e.target.form);
    formData.forEach((value, key) => {
      console.log(`key:${key}, value:${value}`);
    });
    dispatch(updateProduct(formData));
  };

  const inputId = nanoid();

  return (
    <>
      <form
        name="form"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <FieldWrapper>
          <Label>Product name</Label>
          <Input name="name" id="formName" type="text" required />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Category</Label>
          <Select title="Перука" name="category">
            <Option name="wigs">wigs</Option>
            <Option name="costume">costume</Option>
            <Option name="accessories">accessories</Option>
            <Option name="smallStand">smallStand</Option>
            <Option name="bigStand">bigStand</Option>
            <Option name="pendant">pendant</Option>
            <Option name="pin">pin</Option>
            <Option name="hairpins">hairpins</Option>
            <Option name="earrings">earrings</Option>
            <Option name="tapestries">tapestries</Option>
            <Option name="other">other</Option>
          </Select>
        </FieldWrapper>
        <FieldWrapper>
          <Label>Amount</Label>
          <Input name="amount" id={inputId} type="number" required />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Price per one</Label>
          <Input name="price" id={inputId} type="number" required />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Description</Label>
          <Input
            maxLength="96"
            name="description"
            id={inputId}
            type="text"
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Image</Label>
          <Input name="image" id={inputId} type="file" multiple />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Id</Label>
          <Input name="_id" id={inputId} type="text" />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Товар в дорозі</Label>
          <Input name="comingSoon" type="checkbox" id={inputId} />
        </FieldWrapper>
        <ButtonWrapper>
          <Button isLoading={loading} type="submit">
            Add product
          </Button>
          <Button onClick={handleUpdate}>Update product</Button>
        </ButtonWrapper>
      </form>
    </>
  );
}
