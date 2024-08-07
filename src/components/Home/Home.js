import { useTranslation } from "react-i18next";
import { GameOptions } from "../GameOptions/GameOptions.tsx";
import "./Home.css";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      <div className="question-title">{t("How Would You Like to Play?")}</div>
      <GameOptions />
    </div>
  );
}

export default Home;
