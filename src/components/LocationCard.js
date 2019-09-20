import React from "react";
import styled from 'styled-components';

const LocalCard = styled.div`
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

export default function LocationCard({ name, dimension, type }) {
  return (
    <LocalCard>
      <h2>Name: {name}</h2>
      <h3>Dimension: {dimension}</h3>
      <h3>Location Type: {type}</h3>
    </LocalCard>
  )
}
