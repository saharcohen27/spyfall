import { useTranslation } from "react-i18next";
import "./Home.css";

import GroupsIcon from "@mui/icons-material/Groups";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      <div className="question-title">{t("How Would You Like to Play?")}</div>
      <div className="options">
        <Link to="/single">
          <div className="game-option">
            <span className="btn-txt">{t("Single Device")}</span>
            <SmartphoneIcon fontSize="large" />
          </div>
        </Link>
        <Link to="/multiple">
          <div className="game-option">
            <span className="btn-txt">{t("Create Room")}</span>
            <GroupsIcon fontSize="large" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
