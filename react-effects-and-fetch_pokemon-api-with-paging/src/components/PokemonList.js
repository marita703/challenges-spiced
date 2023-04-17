import { useEffect, useState } from "react";

export default function PokemonList() {
  // be careful because, pokemon is an object and not an array, so we have to initialize it as an object {}
  const [pokemon, setPokemon] = useState({});
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
        console.log("data", data);
        // please always console log the whole new object, because it might be empty.
        console.log("pokemon", pokemon);
      } catch (error) {
        console.log(error);
      }
    }
    // we load the function, inside the useEffect hook.
    loadPokemon();
    // the second argument of use effect is its dependencies, so this will load only many times when url changes.
  }, [url]);

  function handleNext() {
    setUrl(pokemon.next);
  }

  function handlePrevious() {
    setUrl(pokemon.previous);
  }

  return (
    <main>
      <button
        type="button"
        onClick={handlePrevious}
        // here we check if pokemon has a previous property, if not (in the case of the first page), we render a button with the property disabled.
        disabled={!pokemon.previous}
      >
        Previous Page
      </button>
      <button type="button" onClick={handleNext}>
        Next Page
      </button>
      <ul>
        {/* we have to use this sintax in order to see if pokemon exists, if it is true, then we can check if pokemon.results exits, and if it does, then we can map on it...  */}
        {pokemon &&
          pokemon.results &&
          pokemon.results.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
    </main>
  );
}
