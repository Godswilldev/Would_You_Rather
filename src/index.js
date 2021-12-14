import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";
import store, { rrfProps } from "./Redux/app/Store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
