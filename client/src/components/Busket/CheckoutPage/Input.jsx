import {
  FieldWrapper, 
  Label, 
  Input
} from "../../Fields/Fields.styled"

export const Inputt = ({
  label,
  type, 
  name, 
  onChange, 
  select,
  placeholder,
  value
}) => {
  return (
    <FieldWrapper select={select}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </FieldWrapper>
  )
}