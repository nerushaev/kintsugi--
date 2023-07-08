import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { current } from "../redux/auth/auth-operations";

export default function UserPage() {
  const dispatch = useDispatch();

  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [dispatch, token]);

  return <div>User Page</div>;
}
