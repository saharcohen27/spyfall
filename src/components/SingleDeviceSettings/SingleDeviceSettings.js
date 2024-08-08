import { useTranslation } from "react-i18next";
import { useState } from "react";

import "./SingleDeviceSettings.css"

import InputPopUp from '../InputPopUp/InputPopUp'

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PeopleIcon from "@mui/icons-material/People";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

import { useSelector, useDispatch } from 'react-redux';

import { incPlayers, decPlayers, incSpies, decSpies, addPlace, removePlace } from '../../store/reducers/settingsReducer';

function SingleDeviceSettings({startGame}) {
  const { t } = useTranslation();
  const players = useSelector((state) => state.settings.players);
  const spies = useSelector((state) => state.settings.spies);
  const addedPlaces = useSelector((state) => state.settings.addedPlaces);

  const [ isPopUpOpen, setIsPopUpOpen ] = useState(false);
  const dispatch = useDispatch();

  const openAddPlace = () => {
    setIsPopUpOpen(true)
  }

  const handleClose = () => {
    setIsPopUpOpen(false)
  }

  const handleSubmit = newPlace => {
    if (newPlace.length < 2 || newPlace.length > 16) return false;
    setIsPopUpOpen(false)
    dispatch(addPlace({newPlace}))
  }
  
  return (
    <>
    {isPopUpOpen && <InputPopUp handleClose={handleClose} handleSubmit={handleSubmit} />}
    <div className="settings-container page-container">
      <div className="title">{t("Game Settings")}</div>
      <div className="setting">
        <label className="setting-label"><PeopleIcon />{t("Total players")}:</label>
        <div className="setting-area">
          <RemoveIcon className="change-btn dec" onClick={() => dispatch(decPlayers())}/>
          {players}
          <AddIcon className="change-btn inc" onClick={() => dispatch(incPlayers())}/>
        </div>
      </div>
      <div className="setting">
        <label className="setting-label"><DirectionsRunIcon/>{t("Total spies")}:</label>
        <div className="setting-area">
          <RemoveIcon className="change-btn dec" onClick={() => dispatch(decSpies())}/>
          {spies}
          <AddIcon className="change-btn inc" onClick={() => dispatch(incSpies())}/>
        </div>
      </div>
      <div className="add-places-setting">      
          <button onClick={openAddPlace} className="add-place-btn"><AddIcon fontSize="small" /> {t("Add Places")}</button>
          {addedPlaces.length !== 0 && <div className="added-places">
            {addedPlaces.map((addedPlace, index) => {
            return (
              <div className="added-place">
                <div className="table-place">{addedPlace}</div>
                <RemoveIcon className="change-btn delete" onClick={() => dispatch(removePlace({index}))}/>
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