import React from "react";
import { useSelector } from "react-redux";
import RegisterForm from "../../components/Auth/RegisterForm";
import Loader from "../../components/Loader/Loader";
import { selectIsLoading } from "../../redux/auth/auth-selectors";

export default function RegisterPage() {
  const loading = useSelector(selectIsLoading);

  return (
    <div>
      {loading && <Loader />}
      <RegisterForm />
    </div>
  );
}
