import { Link } from "react-router-dom";

import LanguageIcon from "@mui/icons-material/Language";
import logo from "../../logo.svg";
import "./NavBar.css";

import "../../i18n";
import { useLanguage } from "../../hooks/useLanguage";

function NavBar() {
  const { isEn, changeLanguage, translate } = useLanguage(true);

  return (
    <header className="navbar-container">
      <div onClick={() => changeLanguage(() => !isEn)}>
        <LanguageIcon fontSize="large" />
      </div>
      <Link to="/">
        <div className="game-name">{translate("The Agent")} 🕵️</div>
      </Link>
      <img className="logo" src={logo} />
    </header>
  );
}

export default NavBar;
