import React, { useEffect, useState } from "react";
import Axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect

  const [ locations, setLocation ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      Axios.get('https://rickandmortyapi.com/api/location/')
        .then((res) => {
          setLocation(res.data.results);
          console.log(res.data.results);
        })
  }, []);

  return (
    <section className="location-list">
     {locations.map((item) => {
          return (
            <LocationCard key={item.id} 
            name={item.name}
            dimension={item.dimension}
            type={item.type}
          />
          )
        }
          )}

      
    </section>
  );
}