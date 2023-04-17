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
        console.log("pokemon", pokemon);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
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
        disabled={!pokemon.previous}
      >
        Previous Page
      </button>
      <button type="button" onClick={handleNext}>
        Next Page
      </button>
      <ul>
        {pokemon &&
          pokemon.results &&
          pokemon.results.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
    </main>
  );
}
