import React from "react";
import styled from 'styled-components';


const EpiCard = styled.div`
display:flex;
background:transparent;
width: 30%;
flex-direction: column;
border: none;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 5px 4px rgba(0, 0, 0, 0.22);
border-radius: 5px;
padding: 20px 15px 0px 15px;
margin-bottom: 30px;
`

export default function EpisodeCard({ name, air_date}) {
  return (
    <EpiCard>
      <h2>Name: {name}</h2>
      <h3>Airdate: {air_date}</h3>
      
    </EpiCard>
  )
}