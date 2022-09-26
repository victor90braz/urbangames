import HomePageStyle from "./HomePageStyle";

function HomePage() {
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
    </HomePageStyle>
  );
}

export default HomePage;
