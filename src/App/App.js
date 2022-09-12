import axios from "axios";
import { useEffect, useState } from "react";
import getWords from "../utils/utils";
import AppStyle from "./AppStyle";

function App() {
  const catFactUrl = "https://catfact.ninja/fact";

  const [catFact, setCatFact] = useState("");

  const showFirst3Words = getWords(catFact, 0, 3);

  useEffect(() => {
    (async () => {
      const { data: dataCatFact } = await axios.get(catFactUrl);

      setCatFact(dataCatFact);

      // eslint-disable-next-line no-console
      console.log(dataCatFact.fact);
    })();
  }, []);

  return (
    <AppStyle>
      <header>
        <h1>APIs</h1>
      </header>

      <main>
        <div className="container-cat">
          <h2>Cat Fact API</h2>
          <p>{catFact.fact}</p>

          <h3>Show First 3 Words:</h3>
          <ul>
            <li>
              <p>{showFirst3Words}</p>
            </li>
          </ul>
        </div>

        <div className="container-giphy">
          <h2>Giphy API</h2>
          <p>{catFact.fact}</p>
        </div>
      </main>
    </AppStyle>
  );
}

export default App;

// https://catfact.ninja/fact
// https://developers.giphy.com/docs/sdk
