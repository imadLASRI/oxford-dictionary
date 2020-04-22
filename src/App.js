import React, { useState, useEffect } from "react";

import Search from "./Components/Search";
import Definition from "./Components/Definition";

import { fetchOxford } from "./oxford";

import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  console.log("Rendering Component...");

  const [word, setWord] = useState("");
  const [senses, setSenses] = useState(null);
  const [searching, setSearching] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    // console.log("Use Effect...");
    setSenses(null);

    if (word !== "") {
      fetchOxford(word, setSearching, setSenses, setErr);
    }
  }, [word]);

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>ReactJS Oxford Dictionary</h2>
      <Search word={word} setWord={setWord} setSearching={setSearching} />

      {senses !== null && senses !== undefined ? (
        <Definition defs={senses} />
      ) : (
        searching &&
        word !== "" && (
          <CircularProgress
            style={{ margin: "10px 50px", display: "inline" }}
          />
        )
      )}

      {/* err handling */}
      <span>
        {err !== null && !searching && (
          <h4 style={{ color: "#dd3131" }}>No Definitions found..</h4>
        )}
      </span>
    </div>
  );
}

export default App;
