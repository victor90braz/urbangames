import { GiHamburgerMenu } from "react-icons/gi";
import MenuHamburgerStyle from "./MenuHamburgerStyle";

function MenuHamburger() {
  return (
    <MenuHamburgerStyle>
      <GiHamburgerMenu className="menu-icon" />
    </MenuHamburgerStyle>
  );
}

export default MenuHamburger;
