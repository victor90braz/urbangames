import axios from "axios";
import { useEffect, useState } from "react";
import AppStyle from "./AppStyle";

function App() {
  const [facts, setFacts] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://catfact.ninja/fact");

      setFacts(data);
    })();
  }, []);

  return (
    <AppStyle>
      <h1>Hello World</h1>
      <p>{facts.fact}</p>
    </AppStyle>
  );
}

export default App;

// https://catfact.ninja/fact
// https://developers.giphy.com/docs/sdk
