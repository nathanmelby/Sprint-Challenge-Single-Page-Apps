import React from "react";
import styled from 'styled-components';

const Card = styled.div`
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

export default function CharacterCard(props) {
  console.log(props)
  return (
    <Card>
      <img className="character-image" src={props.image} alt="A Rick and Morty character" />
      <h2>Name: {props.name}</h2>
      <h3>Species: {props.species}</h3>
      <h3>Gender: {[props.gender]}</h3>
      <h3>Status: {props.status}</h3>
      <h3>Location: {props.location.name}</h3>
      
    </Card>
  )
}
