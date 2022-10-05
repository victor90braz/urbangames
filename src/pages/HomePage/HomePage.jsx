import "bootstrap/dist/css/bootstrap.min.css";
import HomePageStyle from "./HomePageStyle";
import Slides from "../../components/Slides/Slides";
import {
  AssetsCard,
  AssetsCardTitle,
  AssetsContainerText,
} from "./HomePageAssets";
import Download from "../../components/Download/Download";

function HomePage() {
  return (
    <HomePageStyle>
      <div className="container-image">
        <div className="container-text">
          <h2>{AssetsContainerText.title}</h2>
          <h3>{AssetsContainerText.text}</h3>
          <button type="button" disabled>
            <Download />
          </button>
        </div>
      </div>

      <Slides />

      <div className="card">
        <h3 className="card-title">{AssetsCardTitle.title}</h3>
        <p className="card-title">{AssetsCardTitle.text}</p>
      </div>

      {AssetsCard.map((item) => (
        <div className="card" key={item}>
          <img className="card-img-top" src={item.image} alt="Card cap" />
          <h3 className="card-title">{item.title}</h3>
        </div>
      ))}

      <button type="button" disabled>
        <Download />
      </button>
    </HomePageStyle>
  );
}

export default HomePage;
