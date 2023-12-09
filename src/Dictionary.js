import React, { useState } from "react";

import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {


  let [loaded, setLoaded] = useState(false);


  function search() {
    // documentation: https://dictionaryapi.dev/e
  

;

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
   
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Results  />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
