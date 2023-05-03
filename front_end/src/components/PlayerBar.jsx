import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

function PlayerBar() {
  const [playing, setPlaying] = useState(false);

  return (
    <body>
      <div className="container">
        <button type="button">Shuffle Play</button>
        <button
          type="button"
          onClick={playing ? setPlaying(false) : setPlaying(true)}
        >
          {playing ? <p>Play</p> : <p>Pause</p>}{" "}
        </button>
        <button type="button">Next</button>
      </div>
    </body>
  );
}

export default PlayerBar;
