import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageStyle from "./HomePageStyle";
import Slides from "../../components/Slides/Slides";
import { AssetsCard, AssetsCardTitle } from "./HomePageAssets";

function HomePage() {
  const [containerTitle] = useState(AssetsCardTitle);
  const [card] = useState(AssetsCard);

  return (
    <HomePageStyle>
      <div className="container-image">
        <div className="container-text">
          <h2>Play football</h2>
          <h3>Anytime, anywhere.</h3>
          <button type="button" disabled>
            Download and play
          </button>
        </div>
      </div>

      <Slides />

      <div className="card">
        <h2 className="card-title">{containerTitle.title}</h2>
        <p className="card-title">{containerTitle.text}</p>
      </div>

      {card.map((item) => (
        <div className="card" key={item}>
          <img className="card-img-top" src={item.image} alt="Card cap" />
          <h3 className="card-title">{item.title}</h3>
        </div>
      ))}

      <button type="button" disabled>
        Download and play
      </button>
    </HomePageStyle>
  );
}

export default HomePage;
