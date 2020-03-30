import React from "react";

import "./App.css";
import Badge from "./components/Badge";
import BadgeNew from "./pages/BadgeNew";
import "bootstrap/dist/css/bootstrap.css";
import "../src/global.css";

function App() {
  return (
    <div>
      <BadgeNew />
      {/* <Badge
        firstName="Serch"
        lastName="Mata"
        avatarUrl="https://www.gravatar.com/avatar?d=identicon"
        jobTitle=" FullStack Developer"
        twitter="thebeatmo"
      /> */}
    </div>
  );
}

export default App;
