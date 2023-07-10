import MainMenu from "../MainMenu/MainMenu";
import NavState from "../../../context/navState";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import Container from "../Container/Container";
import Busket from "../../Busket/BusketIcon/BusketIcon";
import Loader from "../../Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../../redux/auth/auth-selectors";
import { Suspense } from "react";

export default function SharedLayout() {
  const loadingAuth = useSelector(selectIsLoading);

  return (
    <Suspense fallback={<Loader />}>
      <NavState>
        <MainMenu />
      </NavState>
      <main>
        <Container>
          <Busket />
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Suspense>
  );
}
