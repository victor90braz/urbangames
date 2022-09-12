import axios from "axios";
import { useEffect, useState } from "react";
import getFirst3Words from "../utils/utils";
import AppStyle from "./AppStyle";

function App() {
  const [facts, setFacts] = useState("");
  const showFirst3Words = getFirst3Words(facts);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://catfact.ninja/fact");

      setFacts(data);
    })();
  }, []);

  return (
    <AppStyle>
      <h1>Cat Fact API</h1>
      <p>{facts.fact}</p>
      <p>{showFirst3Words}</p>
    </AppStyle>
  );
}

export default App;

// https://catfact.ninja/fact
// https://developers.giphy.com/docs/sdk
