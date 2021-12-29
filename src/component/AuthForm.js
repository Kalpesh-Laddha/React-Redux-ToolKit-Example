import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth-store";
const Form = () => {
  const dispatcher = useDispatch();

  //  const display = useSelector((state) => state.counter.showCounter);
  const submitDataHandler = (e) => {
    e.preventDefault();
    console.log(authAction);
    dispatcher(authAction.showCounterFun());
  };
  return (
    <form onSubmit={submitDataHandler}>
      <div>
        <label>UserId</label>
        <input type="text" id="id" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default Form;
