import React, { useEffect, useState } from "react";
import Axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList() {

  const [ locations, setLocation ] = useState([]);

  useEffect(() => {

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      Axios.get('https://rickandmortyapi.com/api/location/')
        .then((res) => {
          setLocation(res.data.results);
        })
  }, []);

  return (
    <section className="location-list">
     {locations.map((item) => {
          return (
            <LocationCard 
            key={item.id} 
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