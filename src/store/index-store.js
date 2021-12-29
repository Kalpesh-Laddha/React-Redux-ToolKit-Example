import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-store";
import { counterReducer } from "./counter-store";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;
