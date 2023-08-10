import SharedLayout from "./components/Home/SharedLayout/SharedLayout";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import BusketPage from "./pages/BusketPage";
import AddProductsPage from "./pages/Admin/AddProductsPage";
import Product from "./pages/Product";
import CheckoutPage from "./components/Busket/CheckoutPage/CheckoutPage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useAuth } from "./hooks/useAuth";
import { useDispatch } from "react-redux";
import { current, refreshToken } from "./redux/auth/auth-operations";
import { useEffect } from "react";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";
import RestrictedRoute from "./components/RestrictedRoutes/RestrictedRoutes";
import LoginPage from "./pages/LoginPage";
import InfoPage from "./pages/InfoPage";
import RestorePasswordPage from "./pages/RestorePasswordPage";
import BanersPage from "./pages/Admin/BanersPage";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import RestorePass from "./components/Auth/RestorePass";

function App() {
  const dispatch = useDispatch();
  const { token, isLoggedIn, error } = useAuth();

  useEffect(() => {
    if (!isLoggedIn && token) {
      dispatch(current());
    } else if (error && token && !isLoggedIn) {
      dispatch(refreshToken());
    }
  }, [token, dispatch, isLoggedIn]);

  // if (error) {
  //   dispatch(refreshToken());
  // }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path=":_id" element={<Product />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/busket" element={<BusketPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/restore" element={<RestorePasswordPage />} />
        <Route
          path="/admin"
          element={
            <AdminRoute component={AddProductsPage} redirectTo={"/login"} />
          }
        >
          <Route
            path="baners"
            element={
              <AdminRoute component={BanersPage} redirectTo={"/login"} />
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo={"/user"} />
          }
        />
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
        <Route path="/restore" element={RestorePass} />
      </Route>
    </Routes>
  );
}

export default App;
