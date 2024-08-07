import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './SingleDeviceGame.css'

import OptionCard from '../OptionsCard/OptionsCard'
import SettingsIcon from '@mui/icons-material/Settings';
import RolePopUp from '../RolePopUp/RolePopUp';

import getPlace from '../../services/GeminiService';

function SingleDeviceGame({players, agents, openSettings}) {
  const { t, i18n} = useTranslation();
  const [options, setOptions] = useState(Array(players).fill({role:'Player', opened:false}));
  const [gameCount, setGameCount] = useState(0);
  const [openedRole, setOpenedRole] = useState('')
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [place, setPlace] = useState('');

  useEffect(() => {
    setPlace(t("Loading..."))
    // Create a copy of the options array to work with
    let optionsCopy = [...options];
    let agentCount = agents;

    while (agentCount > 0) {
      // Get a random index
      const randomIndex = Math.floor(Math.random() * players);

      // If the randomly selected position is not already an agent, assign an agent
      if (optionsCopy[randomIndex].role !== 'Agent') {
        optionsCopy[randomIndex] = {role:'Agent', opened:false}
        agentCount--;
      }
    }

    // Update the options state with the new array
    setOptions(optionsCopy);
    getPlace(i18n.language).then(res => 
      setPlace(res)
    ); 
    
  }, [gameCount]);

  const openCard = index => {
    if (options[index - 1].opened) return;
    let optionsCopy = [...options];
    optionsCopy[index - 1] = {...optionsCopy[index - 1], opened:true}
    setOptions(optionsCopy)
    setOpenedRole(optionsCopy[index - 1].role)
    setIsPopUpOpen(true);
  }

  const handleClose = () =>{
    setIsPopUpOpen(false);
  }

  return (
    <>
    {isPopUpOpen && <RolePopUp value={openedRole} handleClose={handleClose} place={place}/>}
    <div className="single-device-game page-container">
      <div className="title with-setting-icon">
        <div className="title-txt">{t("Would you find the Agent?")}</div>
        <div className="setting-icon">
          <SettingsIcon onClick={() => openSettings()}/>
        </div>
      </div>

      <div className="options-grid">
        {options.map((option, index) => <OptionCard index={index+1} value={option.role} opened={option.opened} openCard={openCard}/>)}
      </div>

      <div className="start-game-btn" onClick={() => {
        setOptions(Array(players).fill({role:'Player', opened:false}))
        setGameCount(prev => prev + 1)
        }}>{t("Start New Game")}</div>

    </div>
    </>
    
  );
}

export default SingleDeviceGame;