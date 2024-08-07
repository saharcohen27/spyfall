import { useTranslation } from "react-i18next";
import { useState } from "react";

import "./SingleDeviceSettings.css"

import InputPopUp from '../InputPopUp/InputPopUp'

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PeopleIcon from "@mui/icons-material/People";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

function SingleDeviceSettings({spies, players, updateSpies, updatePlayers, addedPlaces, setAddedPlaces, startGame}) {
  const { t } = useTranslation();
  const [ isPopUpOpen, setIsPopUpOpen ] = useState(false);

  const removePlace = index => {
    const newArray = [...addedPlaces.slice(0, index), ...addedPlaces.slice(index + 1)];
    setAddedPlaces(newArray)
  }

  const addPlace = () => {
    setIsPopUpOpen(true)
  }

  const handleClose = () => {
    setIsPopUpOpen(false)
  }

  const handleSubmit = val => {
    if (val.length < 2 || val.length > 16) return false;
    setIsPopUpOpen(false)
    setAddedPlaces(prev => [...prev, val])
  }
  
  return (
    <>
    {isPopUpOpen && <InputPopUp handleClose={handleClose} handleSubmit={handleSubmit} />}
    <div className="settings-container page-container">
      <div className="title">{t("Game Settings")}</div>
      <div className="setting">
        <label className="setting-label"><PeopleIcon/>{t("Total players")}:</label>
        <div className="setting-area">
          <RemoveIcon className="change-btn dec" onClick={() => updatePlayers(-1)}/>
          {players}
          <AddIcon className="change-btn inc" onClick={() => updatePlayers(1)}/>
        </div>
      </div>
      <div className="setting">
        <label className="setting-label"><DirectionsRunIcon/>{t("Total spies")}:</label>
        <div className="setting-area">
          <RemoveIcon className="change-btn dec" onClick={() => updateSpies(-1)}/>
          {spies}
          <AddIcon className="change-btn inc" onClick={() => updateSpies(1)}/>
        </div>
      </div>
      <div className="add-places-setting">      
          <button onClick={addPlace} className="add-place-btn"><AddIcon fontSize="small" /> {t("Add Places")}</button>
          {addedPlaces.length !== 0 && <div className="added-places">
            {addedPlaces.map((addedPlace, index) => {
            return (
              <div className="added-place">
                <div className="table-place">{addedPlace}</div>
                <RemoveIcon className="change-btn delete" onClick={() => removePlace(index)}/>
              </div>
              )
          })}
        </div>
        }
      </div>
      <div className="start-game-btn" onClick={startGame}>{t("Start Game")}</div>
    </div>
    </>
  );
}

export default SingleDeviceSettings;