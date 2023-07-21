import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserAvatar from "../components/Auth/UserPage/UserAvatar";
import UserData from "../components/Auth/UserPage/UserData/UserData";
import { useAuth } from "../hooks/useAuth";
import { current, logout } from "../redux/auth/auth-operations";
import { selectUser } from "../redux/auth/auth-selectors";
import { Button, ButtonWrapper } from "../components/Buttons/Buttons";

export default function UserPage() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <UserAvatar userData={user} />
      <UserData />
      <ButtonWrapper>
        <Button onClick={handleClick}>Вийти</Button>
      </ButtonWrapper>
    </div>
  );
}
