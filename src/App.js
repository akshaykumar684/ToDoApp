import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toDoActions } from "./store/redux-store";
const App = () => {
  const counter = useSelector((state) => state.toDoStates.counter);
  const dispatch = useDispatch();

  const incrementHander = () => {
    dispatch(toDoActions.increment());
  };

  return (
    <div>
      <h1>To Do App</h1>
      <h2>{`Counter: ${counter}`}</h2>
      <button onClick={incrementHander}>Increment</button>
    </div>
  );
};

export default App;
