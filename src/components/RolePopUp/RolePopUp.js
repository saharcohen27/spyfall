import { useTranslation } from "react-i18next";

import PeopleIcon from "@mui/icons-material/People";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

import "./RolePopUp.css";

function RolePopUp({ status, value, handleClose, place }) {
  const { t } = useTranslation();

  return (
    <div className={`popup-overlay ${status}`}>
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <div className="popup-content">
          {value === "Spy" ? <h1>{t("You're The Spy")}</h1> : <h1>{place}</h1>}
        </div>
      </div>
    </div>
  );
}

export default RolePopUp;
