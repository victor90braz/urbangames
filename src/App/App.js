import Brand from "../components/Brand/Brand";
import MenuHamburger from "../components/MenuHamburguer/MenuHamburger";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import AppStyle from "./AppStyle";

function App() {
  return (
    <AppStyle>
      <header>
        <h1>UrbanGames</h1>
        <Brand />
        <MenuHamburger />
      </header>
      <main>
        <VideoPlayer />
      </main>
    </AppStyle>
  );
}

export default App;
