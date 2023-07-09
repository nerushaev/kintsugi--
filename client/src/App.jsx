import SharedLayout from "./components/Home/SharedLayout/SharedLayout";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import BusketPage from "./pages/BusketPage";
import Delivery from "./pages/Delivery";
import Admin from "./pages/Admin";
import LoginAdmin from "./components/Admin/LoginAdmin";
import Product from "./pages/Product";
import CheckoutPage from "./components/Busket/CheckoutPage/CheckoutPage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useAuth } from "./hooks/useAuth";
import { useDispatch } from "react-redux";
import { current } from "./redux/auth/auth-operations";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      try {
        dispatch(current());
      } catch (error) {
        console.log(error);
      }
    }
  }, [token, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path=":_id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/busket" element={<BusketPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
