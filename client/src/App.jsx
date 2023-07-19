import SharedLayout from "./components/Home/SharedLayout/SharedLayout";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import BusketPage from "./pages/BusketPage";
import Delivery from "./pages/Delivery";
import Admin from "./pages/Admin";
import LoginForm from "./components/Auth/LoginForm";
import Product from "./pages/Product";
import CheckoutPage from "./components/Busket/CheckoutPage/CheckoutPage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useAuth } from "./hooks/useAuth";
import { useDispatch } from "react-redux";
import { current, refreshToken } from "./redux/auth/auth-operations";
import { useEffect, useMemo } from "react";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";
import RestrictedRoute from "./components/RestrictedRoutes/RestrictedRoutes";
import LoginPage from "./pages/LoginPage";
function App() {
  const dispatch = useDispatch();
  const { token, error, isLoggedIn } = useAuth();

  useEffect(() => {
    if (token) {
      try {
        dispatch(current());
      } catch (error) {
        console.log(error);
      }
    }
    if (token && !isLoggedIn) {
      dispatch(refreshToken());
    }
  }, [token, !isLoggedIn, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path=":_id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/busket" element={<BusketPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/admin"
          element={<PrivateRoute component={Admin} redirectTo={"/login"} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/user"
          element={<PrivateRoute component={UserPage} redirectTo={"/login"} />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo={"/user"} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
