import { useDispatch, useSelector } from "react-redux";
import UserAvatar from "../components/Auth/UserPage/UserAvatar";
import UserData from "../components/Auth/UserPage/UserData/UserData";
import { logout } from "../redux/auth/auth-operations";
import { selectUser } from "../redux/auth/auth-selectors";
import { Button, ButtonWrapper } from "../components/Buttons/Buttons";
import ErrorMessage from "../components/Home/ErrorMessage/ErrorMessage";

export default function UserPage() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <UserAvatar userData={user} />
      {!user.verify && (
        <ErrorMessage
          message={`Потрібна верифікація! На вашу пошту ${user.email} було надіслано листа!`}
        />
      )}
      <UserData user={user} />
      <ButtonWrapper>
        <Button onClick={handleClick}>Вийти</Button>
      </ButtonWrapper>
    </div>
  );
}
