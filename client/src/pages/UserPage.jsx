import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserAvatar from "../components/Auth/UserPage/UserAvatar";
import UserData from "../components/Auth/UserPage/UserData/UserData";
import { useAuth } from "../hooks/useAuth";
import { current } from "../redux/auth/auth-operations";
import { selectUser } from "../redux/auth/auth-selectors";

export default function UserPage() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [dispatch, token]);

  return (
    <div>
      <UserAvatar userData={user} />
      <UserData />
    </div>
  );
}
