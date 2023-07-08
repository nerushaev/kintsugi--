import { Navigate } from "react-router";
import RegisterForm from "../../components/Auth/RegisterForm";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterPage() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/user" />;
  }

  return (
    <div>
      <RegisterForm />
    </div>
  );
}
