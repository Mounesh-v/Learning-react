// 3.CreateSlice and write Logic Here

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "suman",
  counter: 10,
  product: [
    {
      id: 1,
      title: "iphone",
      id: 2,
      title: "samsung",
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.value -= 1;
      state.counter = state.counter - 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
