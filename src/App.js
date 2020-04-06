import React from "react";

import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import BadgeNew from "./pages/BadgeNew";

import Badges from "./pages/Badges";
import "bootstrap/dist/css/bootstrap.css";
import "../src/global.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
