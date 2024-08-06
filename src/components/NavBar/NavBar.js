import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import LanguageIcon from "@mui/icons-material/Language";
import logo from "../../logo.svg";
import "./NavBar.css";

import "../../i18n";
import { useLanguage } from "../../hooks/useLanguage";

function NavBar() {
  const { t } = useTranslation();
  const { isEn, changeLanguage } = useLanguage(true);

  return (
    <header className="navbar-container">
      <div onClick={() => changeLanguage(() => !isEn)}>
        <LanguageIcon fontSize="large" />
      </div>
      <Link to="/">
        <div className="game-name">{t("The Agent")} 🕵️</div>
      </Link>
      <img className="logo" src={logo} />
    </header>
  );
}

export default NavBar;
