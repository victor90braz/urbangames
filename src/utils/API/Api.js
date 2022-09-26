import axios from "axios";
import { useEffect, useState } from "react";
import getWords from "../utilsFunctions";
import ApiStyle from "./ApiStyle";

function Api() {
  const GIPHY_API_KEY = "IavaWn74uj0EqfhTYrZvVaGqRT2Bk5p6";
  const string = "gif";

  const urlCatFact = "https://catfact.ninja/fact";
  const urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${string}`;

  const [catFact, setCatFact] = useState("");
  const [giphy, setGiphy] = useState("");

  const showFirst3Words = getWords(catFact, 0, 3);

  useEffect(() => {
    (async () => {
      const { data: dataCatFact } = await axios.get(urlCatFact);

      setCatFact(dataCatFact);

      // eslint-disable-next-line no-console
      console.log(dataCatFact.fact);
    })();
  }, []);

  // State to store count value
  const [count, setCount] = useState(12);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };

  useEffect(() => {
    (async () => {
      const dataCatFact = await axios.get(urlGiphy);

      setGiphy(dataCatFact.data.data[setCount].images.original.url);

      // eslint-disable-next-line no-console
      console.log(dataCatFact.data.data[setCount].images.original.url);
    })();
  }, []);

  return (
    <ApiStyle>
      <header>
        <h1>APIs</h1>
      </header>

      <main>
        <div className="container-cat">
          <h2>Cat Fact API</h2>
          <p>{catFact.fact}</p>

          <h3>Show First 3 Words:</h3>
          <ul>
            <li>{showFirst3Words}</li>
          </ul>
        </div>

        <div className="container-giphy">
          <center>
            <h2>Giphy API</h2>

            <img src={giphy} alt={giphy} width="100%" height="auto" />
          </center>
          <button type="button" onClick={incrementCount}>
            Click Here
          </button>
          {count}
        </div>
      </main>
    </ApiStyle>
  );
}

export default Api;
