import React from "react";

import "./App.css";
import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "../src/global.css";

function App() {
  return (
    <Badge
      firstName="Serch"
      lastName="Mata"
      avatar="https://www.gravatar.com/avatar?d=identicon"
      jobTitle=" FullStack Developer"
      twitter="thebeatmo"
    />
  );
}

export default App;
