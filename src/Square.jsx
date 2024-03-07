import React from "react";
import "./SquareStyle.css";
const Square = ({ id, className, state, userChoicecolor }) => {
  return (
    <div
      className={`squareContainer  ${className} ${
        state === userChoicecolor ? "x-color" : "y-color"
      }`}
      id={id}
    >
      {state}
    </div>
  );
};

export default Square;
