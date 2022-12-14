import "bootstrap/dist/css/bootstrap.min.css";
import HomePageStyle from "./HomePageStyle";
import Slides from "../../components/Slides/Slides";
import {
  AssetsCard,
  AssetsCardTitle,
  AssetsContainerText,
} from "./HomePageAssets";
import Download from "../../components/Download/Download";

const HomePage = () => {
  return (
    <HomePageStyle>
      <section>
        <div className="container-image">
          <div className="container-text">
            <h2>{AssetsContainerText.title}</h2>
            <h3>{AssetsContainerText.text}</h3>

            <button type="button" aria-label="button-download" disabled>
              <Download />
            </button>
          </div>
        </div>
      </section>

      <section>
        <Slides />
      </section>

      <section className="section-card">
        <div className="card">
          <h3 className="card-title">{AssetsCardTitle.title}</h3>
          <p className="card-title">{AssetsCardTitle.text}</p>
        </div>
      </section>

      <section className="section-card-cap">
        {AssetsCard.map((item) => (
          <div className="card-cap" key={item.id}>
            <img className="card-img-top" src={item.image} alt="Card cap" />
            <h3 className="card-title">{item.title}</h3>
          </div>
        ))}
      </section>
    </HomePageStyle>
  );
};

export default HomePage;
