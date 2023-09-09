import { Form } from "../Admin/Fields";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import {
  addProducts,
} from "../../redux/products/products-operation";
import { ButtonWrapper, Button } from "../Buttons/Buttons";
import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Select = styled.select`
  width: 100%;
  height: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: ${theme.fontSizes.small};
`;

const FieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const Option = styled.input`
  margin-right: 5px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  flex-basis: calc((100% - 20px) / 2);
`;

export const OptionsWrapper = styled.div`
  display: flex;
  width: 280px;
	flex-wrap: wrap;
  margin-bottom: 40px;
  justify-content: space-between;

`;

const Category = styled.p`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export default function FormAddProducts() {
  const loading = true;
  const dispatch = useDispatch();

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

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target.form);
  //   const formData = new FormData(e.target.form);
  //   formData.forEach((value, key) => {
  //     console.log(`key:${key}, value:${value}`);
  //   });
  //   dispatch(updateProduct(formData));
  // };

  const inputId = nanoid();

  return (
    <>
      <Form
        name="form"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <FieldWrapper>
          <Input
            placeholder="Назва товару"
            name="name"
            id="formName"
            type="text"
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <Input
            placeholder="Кількість"
            name="amount"
            id={inputId}
            type="number"
            min={1}
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <Input
            placeholder="Ціна за одиницю"
            name="price"
            id={inputId}
            type="number"
            min={10}
            required
          />
        </FieldWrapper>
        <Category>Category</Category>
        <OptionsWrapper>
          <Select title="Перука" name="category">
            <option name="wigs">Перука</option>
            <option name="costume">Костюм</option>
            <option name="accessories">Аксессури</option>
            <option name="smallStand">Маленькі стенди</option>
            <option name="bigStand">Великі стенди</option>
            <option name="pendant">Підвіски</option>
            <option name="pin">Пін</option>
            <option name="hairpins">Шпильки</option>
            <option name="earrings">Сережки</option>
            <option name="tapestries">Гобелени</option>
            <option name="other">Інше</option>
          </Select>
        </OptionsWrapper>
        <FieldWrapper>
        <Input
          placeholder="Опис товару"
          name="description"
          id={inputId}
          type="text"
          min={20}
          required
        />
        </FieldWrapper>
        <FieldWrapper>
          <label>Зображення</label>
        <Input
          name="image"
          id={inputId}
          type="file"
          multiple
          required
        />
        </FieldWrapper>
                <Category>Розміри</Category>
        <OptionsWrapper>
          <OptionWrapper>
            <Option name="size" value="S" type="checkbox" />
            <label>S</label>
          </OptionWrapper>
          <OptionWrapper>
            <Option name="size" value="M" type="checkbox" />
            <label>M</label>
          </OptionWrapper>
          <OptionWrapper>
          <Option name="size" value="L" type="checkbox" />
          <label>L</label>
          </OptionWrapper>
          <OptionWrapper>
          <Option name="size" value="XL" type="checkbox" />
          <label>XL</label>
          </OptionWrapper>
          <OptionWrapper>
          <Option name="size" value="XXL" type="checkbox" />
          <label>XXL</label>
          </OptionWrapper>
          <OptionWrapper>
          <Option name="size" value="XXXL" type="checkbox" />
          <label>XXXL</label>
          </OptionWrapper>
          <OptionWrapper>
          <Option name="size" value="-" type="checkbox" />
          <label>Без розміру</label>
          </OptionWrapper>
        </OptionsWrapper>
        <ButtonWrapper>
          <Button isLoading={loading} type="submit">
            Add product
          </Button>
        </ButtonWrapper>
        {/* <ButtonWrapper>
          <Button onClick={handleUpdate}>Update product</Button>
          </ButtonWrapper> */}
      </Form>
    </>
  );
}
