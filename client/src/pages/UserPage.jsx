import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { current } from "../redux/auth/auth-operations";
import { getIsLogin } from "../redux/auth/auth-selectors";


export default function UserPage() {
  const isLogin = useSelector(getIsLogin);

  const { userData, setUserData } = useState({
    
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [isLogin, dispatch])

  return (
    <div>LoginPage</div>
  )
}
