import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "MUL":
      return state * 2;
    case "DIV":
      return state / 2;
    default:
      return state;
  }
};

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Use Reducer  </h2>
          <div className="row">
            <div className="offset-5 col-md-6"><h3> {state} </h3></div>
          </div>
          <div className="col-md-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch({ type: "INC" })}
            >
              Increment
            </button>
          </div>
          <div className="col-md-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => dispatch({ type: "DEC" })}
            >
              Decrement
            </button>
          </div>
          <div className="col-md-3">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => dispatch({ type: "MUL" })}
            >
              Multiplication
            </button>
          </div>
          <div className="col-md-3">
            <button
              type="button"
              className="btn btn-info"
              onClick={() => dispatch({ type: "DIV" })}
            >
              Division
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usereducer;
