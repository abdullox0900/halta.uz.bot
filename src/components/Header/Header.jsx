import {Logo} from "../../assets/svg/icons";
import Container from "../Container/Container";
import "./Header.scss";

function Header() {
  return (
    <Container>
      <header className="header">
        <a href="/" className="header__logo-wrap">
          <Logo />
          <span className="header__logo-text">Halta</span>
        </a>

        <a href="#" className="header__btn">Get started</a>
      </header>
    </Container>
  );
}

export default Header;
