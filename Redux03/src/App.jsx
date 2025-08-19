import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/CreateSlice";

const App = () => {
  const counter = useSelector((state) => state.counter.value); //counter will coming from the store.js and value is coming from the CreateSlice folder
  const dispatch = useDispatch();
  return (
    <div>
      {/* 4.Use The Slices OR Stores using useSelector , useDispatch */}
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        incrementByAmount
      </button>
    </div>
  );
};

export default App;
