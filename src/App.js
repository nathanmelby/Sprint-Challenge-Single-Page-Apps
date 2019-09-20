import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm";


import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/characterlist" component={CharacterList}/>
      
    </main>
  );
}
