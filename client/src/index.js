import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <HashRouter basename="/">
          <CookiesProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </CookiesProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
