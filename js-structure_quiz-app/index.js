// Store the cards in a global state
import { cards } from "./utils/cards.js";

// Header
import { Header } from "./components/Header/header.js";

// Form and cards

import { Form } from "./components/Form/Form.js";

//bookmark

import { Bookmark } from "./components/Bookmark/bookmark.js";

// Card

import { Card } from "./components/Card/card.js";

// Cardlist

import { CardList } from "./components/CardList/cardlist.js";

// app

import { App } from "./components/App/app.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
