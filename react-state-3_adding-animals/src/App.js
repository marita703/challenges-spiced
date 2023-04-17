import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
// Do not forget to add the uid so it can work
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  // in this fucntion we modify the array of initial anmials, we created a new array called animals, in the top const, and this is a set constant because we are using react, this is the way react creates variables.
  const [animals, setAnimals] = useState(initialAnimals);

  // then this fucntion recieves a parameter a new object, that is created from the form... and we name it new animal... the function handleAddAnimal will add a new object to the variable animals that we created on the top, and also add the initial animals that were already given... on the top, the function useState, sets the initial value of the variable, so in fact this variable (array) already contains the initial set of animals.
  //in order to add the new object called (newAnimal), we need to use setAnimals, and we spread the first value of animals (which is the first set of animals) like so: ...animals
  // then we create a new object... adding a unique ID... this id we give it like so: id:uid(), this is a library from react, that creates a random number, and react always needs a new id when rendering new elements, because otherwise it gets confused.
  // then we spread the rest of the object like so... do not forget the coma: ...newAnimal
  function handleAddAnimal(newAnimal) {
    setAnimals([...animals, { id: uid(), ...newAnimal }]);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
