import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
const Card = React.lazy(() => import("./Cards.js"));

function App() {
  return (
    <div className="all">
      <div className="center-image">
        <img
          src={require("./images/ezgif.com-gif-maker.jpg")}
          alt="drop"
          width="200"
          height="200"
        ></img>
      </div>

      <div className="cards">
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
