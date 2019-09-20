import React, { useEffect, useState } from "react";
import Axios from "axios";

import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {

  const [ episodes, setEpisodes ] = useState([]);

  useEffect(() => {

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      Axios.get('https://rickandmortyapi.com/api/episode/')
        .then((res) => {
          setEpisodes(res.data.results);
        })
  }, []);

  return (
    <section className="episode-list">
     {episodes.map((item) => {
          return (
            <EpisodeCard 
            key={item.id} 
            name={item.name}
            air_date={item.air_date}
          />
          )
        }
          )}   
    </section>
  );
}