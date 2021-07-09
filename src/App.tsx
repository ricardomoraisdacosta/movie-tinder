import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MainPanel from "./MainPanel/MainPanel";
import FavoritesPanel from "./FavoritesPanel/FavoritesPanel";
import ShameListPanel from "./ShameListPanel/ShameListPanel";
import SearchPanel from "./SearchPanel/SearchPanel";
import NavBar from "./UI/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Route exact path="/favorites">
        <FavoritesPanel />
      </Route>
      <Route exact path="/shame">
        <ShameListPanel />
      </Route>
      <Route exact path="/search">
        <SearchPanel />
      </Route>
      <Route exact path="/">
        <MainPanel />
      </Route>
      <NavBar />
    </div>
  );
}

export default App;
