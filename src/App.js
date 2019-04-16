import React, { useState } from "react";
import css from "./App.module.css";

const App = props => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    try {
      const fetched = await fetch(
        "https://sv443.net/jokeapi/category/Programming",
        {
          header: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      const parsed = await fetched.json();
      if (parsed.type === "twopart") {
        setJoke(`${parsed.setup}....... ${parsed.delivery}`)
      }
      if (parsed.type === "single") {
        setJoke(`${parsed.joke}`)
      }
    } catch (err) {
      console.error(err);
    }
  };

  const joker = fetchJoke;

  return (
    <>
      <button className={css.jokeButton} onClick={joker}>
        {" "}
        Get da funnyz{" "}
      </button>
      <h1>{joke}</h1>
    </>
  );
};

export default App;
