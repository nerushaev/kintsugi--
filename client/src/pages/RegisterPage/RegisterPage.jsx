import React from "react";
import RegisterForm from "../../components/Auth/RegisterForm";

export default function RegisterPage() {
  // const { isLoggedIn } = useAuth();

  // if (isLoggedIn) {
  //   return <Navigate to="/user" />;
  // }

  return (
    <div>
      <RegisterForm />
    </div>
  );
}
