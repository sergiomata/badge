import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";
import NotFound from "./pages/NotFound";
import BadgeEdit from "./pages/BadgeEdit";
import Home from "./pages/Home";

import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../src/global.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:id" component={BadgeEdit} />
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
