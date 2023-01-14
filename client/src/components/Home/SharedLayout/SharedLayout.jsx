import MainMenu from "../MainMenu/MainMenu";
import NavState from "../../../context/navState";
import Footer from '../Footer/Footer'
import { Outlet } from "react-router";
import Container from "../Container/Container";
import Busket from "../../Busket/BusketIcon/BusketIcon";

export default function SharedLayout () {
  return (
    <>
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
    </>
  )
}