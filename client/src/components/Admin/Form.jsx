import { Select, Option } from "../Admin/Fields";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
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
import { Inputt } from "../Busket/CheckoutPage/Input";

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
        <Inputt
          label="Назва товару"
          name="name"
          id="formName"
          type="text"
          required
        />
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
        <Inputt
          label="Кількість"
          name="amount"
          id={inputId}
          type="number"
          min={1}
          required
        />
        <Inputt
          label="Ціна за одиницю"
          name="price"
          id={inputId}
          type="number"
          min={10}
          required
        />
        <Inputt
          label="Опис товару"
          name="description"
          id={inputId}
          type="text"
          min={20}
          required
        />
        <Inputt
          label="Зображення"
          name="image"
          id={inputId}
          type="file"
          multiple
          required
        />
        <Inputt label="Айді" name="_id" id={inputId} type="text" required />
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
