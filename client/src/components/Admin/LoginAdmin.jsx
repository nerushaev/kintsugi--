import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { getCurrent, login } from '../../API/api';
import { Form, Label, Input, Button, Select, FieldContainer, Option } from '../Admin/Fields';
import { Navigate } from 'react-router';

export default function LoginAdmin() {
  const [token, setToken] = useState()
  const [isUserLogin, setIsUserLogin] = useState();

  const emailId = nanoid();
  const passwordId = nanoid()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const loginData = {
      email,
      password
    }
    try {
      const result = await login(JSON.stringify(loginData));
      setToken(result.data.token);
      localStorage.setItem('kintsugi-token', JSON.stringify(result.data.token));
    } catch (error) {
      console.log(error.message);
    }
  }

    if (isUserLogin) {
    return <Navigate to="/admin" />
  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <FieldContainer>
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          id={emailId}
          required
        />
      </FieldContainer>
      <FieldContainer>
        <Label>Password</Label>
        <Input
          name="password"
          type="password"
          id={passwordId}
          required
        />
      </FieldContainer>
      <Button>Login</Button>
      </Form>
      </>
  )
}
