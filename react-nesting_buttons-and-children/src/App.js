import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <>
        <Button> hola </Button>
        <Button> como </Button>
        <Button>estas </Button>
        <Button> amor</Button>
      </>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
