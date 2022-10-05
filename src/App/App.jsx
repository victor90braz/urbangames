import Brand from "../components/Brand/Brand";
import MenuHamburger from "../components/MenuHamburguer/MenuHamburger";
import Title from "../components/Title/Title";
import HomePage from "../pages/HomePage/HomePage";

import AppStyle from "./AppStyle";

function App() {
  return (
    <AppStyle>
      <header>
        <Title />
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
