import { nanoid } from "nanoid";
import { login } from "../../redux/auth/auth-operations";
import { Form } from "../Admin/Fields";
import { useMemo, useState } from "react";
import { Navigate } from "react-router";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { Inputt } from "../Busket/CheckoutPage/Input";
import { Button, ButtonWrapper } from "../Buttons/Buttons";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const error = useSelector(getError);
  // const [adminToken, setAdminToken] = useState('');

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/user" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    // setEmail("");
    // setPassword("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Inputt
          position="center"
          label="Електронна пошта:"
          onChange={handleChange}
          value={email}
          name="email"
          type="email"
          id={emailId}
          required
        />
        <Inputt
          position="center"
          label="Пароль:"
          onChange={handleChange}
          value={password}
          name="password"
          type="password"
          id={passwordId}
          required
        />
        <ButtonWrapper>
          <Button type="submit">Увійти</Button>
        </ButtonWrapper>
      </Form>
    </>
  );
}
