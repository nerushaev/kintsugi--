import { useSelector } from "react-redux";
import { getIsLogin } from "../redux/auth/auth-selectors";

export const useAuth = () => {
  const result = useSelector(getIsLogin);
  return result;
};