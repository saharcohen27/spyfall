import { useTranslation } from "react-i18next";

import "./InputPopUp.css";
import { useState } from "react";

function PopUpContent({ handleSubmit }) {
  const { t } = useTranslation();
  const [val, setVal] = useState("");

  const onChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <div className="popup-content">
      <input type="text" onChange={(e) => onChange(e)} value={val} />
      <button className="add-place-button" onClick={() => handleSubmit(val)}>
        {t("Add")}
      </button>
    </div>
  );
}

function InputPopUp({ handleClose, handleSubmit }) {
  return (
    <div className={`popup-overlay`}>
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <PopUpContent handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default InputPopUp;
