import Brand from "../components/Brand/Brand";
import MenuHamburger from "../components/MenuHamburguer/MenuHamburger";
import HomePage from "../pages/HomePage/HomePage";
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
        <HomePage />
      </main>
    </AppStyle>
  );
}

export default App;
