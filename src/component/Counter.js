import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counter-store";
const Counter = () => {
  const dispatcher = useDispatch();

  const counter = useSelector((state) => state.counter.value);
  const toggle = useSelector((state) => state.counter.display);
  const display = useSelector((state) => state.auth.showCounter);

  const incHandler = () => {
    console.log(counterAction);
    dispatcher(counterAction.increament());
  };
  const decHandler = () => {
    dispatcher(counterAction.decreament());
  };
  const disHandler = () => {
    dispatcher(counterAction.toggle());
  };
  return (
    <div>
      <h1>Redux LayOut Example </h1>
      {!display && <h3> Click the login button</h3>}
      {display && <h2>Time to do some cracy shit</h2>}
      {toggle && <h3>Counter - {counter}</h3>}
      <button onClick={incHandler}> Increament </button>
      <button onClick={decHandler}> Decreament </button>
      <button onClick={disHandler}> Toggle </button>
    </div>
  );
};

export default Counter;
