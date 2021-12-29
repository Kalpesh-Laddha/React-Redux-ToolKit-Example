import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { showCounter: false };

const authSlice = createSlice({
  name: "AuthSlice",
  initialState: initialAuthState,
  reducers: {
    showCounterFun(state) {
      state.showCounter = !state.showCounter;
    }
  }
});
console.log(authSlice);
console.log(authSlice.reducer);
console.log(authSlice.reducer.showCounterFun);

export const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;
