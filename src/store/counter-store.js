import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, display: true };
const counterSlice = createSlice({
  name: "Counter Example",
  initialState: initialCounterState,
  reducers: {
    increament(state) {
      state.value++;
    },
    decreament(state) {
      state.value--;
    },
    toggle(state) {
      state.display = !state.display;
    }
  }
});

export const counterAction = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
