import React from "react";
import "./styles.css";

export default function App() {
  function clickLog(name) {
    console.log("you clicked me!!! " + name);
  }

  return (
    <div>
      <Button
        color="green"
        text="Submit"
        disabled={false}
        onButton={clickLog}
      />
      <Button
        color="yellow"
        text="Disabled"
        disabled={true}
        onButton={clickLog}
      />
      <Button color="Red" text="Danger" disabled={false} onButton={clickLog} />
    </div>
  );
}

function Button({ color, disabled, text, onButton }) {
  return (
    <button
      onClick={() => onButton(text)}
      disabled={disabled}
      style={{ backgroundColor: color, height: "100px" }}
    >
      {text}
    </button>
  );
}
