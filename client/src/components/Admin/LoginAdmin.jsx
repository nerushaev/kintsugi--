import { nanoid } from 'nanoid';
import { current, login } from '../../redux/auth/auth-operations';
import { Form, Label, Input, Button, FieldContainer } from '../Admin/Fields';
import { useMemo, useState } from 'react';
import { Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLogin } from '../../redux/auth/auth-selectors';
import { useEffect } from 'react';

export default function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(getError);
  // const [adminToken, setAdminToken] = useState('');

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const isUserLogin = useSelector(getIsLogin);

  useEffect(() => {
    dispatch(current());
  }, [dispatch])

  if (isUserLogin) {
    return <Navigate to="/admin" />
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email, password}))
      setEmail('');
      setPassword('');
  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <FieldContainer>
        <Label>Email</Label>
        <Input
          onChange={handleChange}
          value={email}
          name="email"
          type="email"
          id={emailId}
          required
        />
      </FieldContainer>
      <FieldContainer>
        <Label>Password</Label>
        <Input
          onChange={handleChange}
          value={password}
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
