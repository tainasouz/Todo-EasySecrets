import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  </React.StrictMode>
);
