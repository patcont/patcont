import logo from "./logo.svg";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
const Card = React.lazy(() => import("./Cards.js"));

function App() {
  return (
    <div class="all">
      <div className="center-image">
        <img
          src={require("./images/ezgif.com-gif-maker.jpg")}
          alt="drop"
          width="200"
          height="200"
        ></img>
      </div>

      <div class="cards">
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
