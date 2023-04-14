import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counter} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => {
            console.log("clicked");
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => {
            console.log("clicked");
            counter === 0 ? setCounter(0) : setCounter(counter - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
