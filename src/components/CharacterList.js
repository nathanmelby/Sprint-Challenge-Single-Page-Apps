import React, { useEffect, useState } from "react";
import Axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      Axios.get('https://rickandmortyapi.com/api/character/')
        .then((res) => {
          setCharacters(res.data.results);
          console.log(res.data.results);
        })
  }, []);

  return (
    <section className="character-list">
      <h2>
        {characters.map((item) => {
          return (
            <CharacterCard key={item.id} 
            name={item.name} 
            image={item.image}
            species={item.species}
            gender={item.gender}
            location={item.location}
            status={item.status}
            />
          )
        }
          )}

      </h2>
    </section>
  );
}
