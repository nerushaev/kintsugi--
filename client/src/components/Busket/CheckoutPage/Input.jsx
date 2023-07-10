import { FieldWrapper, Label, Input } from "../../Fields/Fields.styled";

export const Inputt = ({
  label,
  type,
  name,
  onChange,
  select,
  placeholder,
  value,
  disable,
}) => {
  return (
    <FieldWrapper select={select}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        disable={disable}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
      />
    </FieldWrapper>
  );
};
