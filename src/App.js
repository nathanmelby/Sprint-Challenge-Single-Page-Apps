import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";


import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";



export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Navigation />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/characterlist" component={CharacterList}/>
      <Route exact path="/locationslist" component={LocationsList}/>
      <Route exact path="/episodeslist" component={EpisodeList}/>
    </main>
  );
}
