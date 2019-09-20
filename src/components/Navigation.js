import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
background: transparent;
border-radius: 3px;
border 2px solid dodgerblue;
font-size: 1rem;
color: dodgerblue;
margin: 0 1em;
padding: 0.5em 2em

&:hover{
background-color: dodgerblue;
color: white;
}
`

export default function Navigation() {
    return (
        <div className="navmenu">
            <Link to='/'><Button>Welcome Page</Button></Link>
            <Link to='/characterlist'><Button>Character Page</Button></Link>
        </div>
    )

};
