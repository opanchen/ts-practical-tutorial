import { useAppSelector, useAppDispatch } from "../../hooks";
import { decrement, increment, reset, setStatus } from "./counterSlice";

function Component() {
  const { count, status } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Status: {status}</h2>

      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            // console.log("increment");
            // dispatch({ type: "increment" });
            dispatch(increment());
          }}
        >
          Increment
        </button>

        <button
          className="btn"
          onClick={() => {
            // console.log("decrement");
            // dispatch({ type: "decrement" });
            dispatch(decrement());
          }}
        >
          Decrement
        </button>

        <button
          className="btn"
          onClick={() => {
            // console.log("reset");
            // dispatch({ type: "reset" });
            dispatch(reset());
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
            // dispatch({
            //   type: "setStatus",
            //   payload: "active",
            // });
            dispatch(setStatus("active"));
          }}
        >
          Set Status to Active
        </button>

        <button
          className="btn"
          onClick={() => {
            // console.log("set status to inactive");
            // dispatch({
            //   type: "setStatus",
            //   payload: "inactive",
            // });
            dispatch(setStatus("inactive"));
          }}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
