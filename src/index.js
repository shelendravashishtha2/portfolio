import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import App from "./App";
import rootReducer from "./redux/rootReducer";
import { configureStore, Tuple } from "@reduxjs/toolkit";

let store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [thunk, ...getDefaultMiddleware()],
});

const render = createRoot(document.getElementById("root"));
render.render(
  <Provider store={store}>
    <App />
  </Provider>
);
