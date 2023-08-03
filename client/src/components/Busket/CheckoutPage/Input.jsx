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
  position,
  min,
  multiple,
}) => {
  return (
    <FieldWrapper select={select}>
      <Label position={position} htmlFor={name}>
        {label}
      </Label>
      <Input
        min={min}
        disable={disable}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        multiple={multiple}
      />
    </FieldWrapper>
  );
};
