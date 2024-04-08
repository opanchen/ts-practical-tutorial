import { useReducer } from "react";
import { initialState, counterReducer } from "./reducer";

function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h2>Status: {state.status}</h2>

      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            // console.log("increment");
            dispatch({ type: "increment" });
          }}
        >
          Increment
        </button>

        <button
          className="btn"
          onClick={() => {
            // console.log("decrement");
            dispatch({ type: "decrement" });
          }}
        >
          Decrement
        </button>

        <button
          className="btn"
          onClick={() => {
            // console.log("reset");
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>

      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            // console.log("set status to active");
            dispatch({
              type: "setStatus",
              payload: "active",
            });
          }}
        >
          Set Status to Active
        </button>

        <button
          className="btn"
          onClick={() => {
            // console.log("set status to inactive");
            dispatch({
              type: "setStatus",
              payload: "inactive",
            });
          }}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
