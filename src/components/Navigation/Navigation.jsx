import Brand from "../Brand/Brand";
import MenuHamburger from "../MenuHamburguer/MenuHamburger";
import NavigationStyle from "./NavigationStyle";

function Navigation() {
  return (
    <NavigationStyle className="container-navigation">
      <Brand />
      <MenuHamburger />
    </NavigationStyle>
  );
}

export default Navigation;
