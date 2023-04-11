import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title"> Title</h2>
      <label htmlFor="hola">Write your text</label>
      <input htmlFor="hola"></input>
      <a className="article__link" href="https://cgcnfts.com/"></a>
    </article>
  );
}
