import { ReactComponent as Logo } from "../icons/spacex-logo.svg";
import { ReactComponent as ArrowLeft } from "../icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../icons/arrow-right.svg";

function Header() {
  return (
    <header className="header">
      <ArrowLeft className="header__arrow" />
      <Logo className="header__logo" />
      <ArrowRight className="header__arrow" />
    </header>
  );
}

export default Header;
