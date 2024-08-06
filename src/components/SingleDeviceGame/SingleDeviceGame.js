import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './SingleDeviceGame.css'

import OptionCard from '../OptionsCard/OptionsCard'
import SettingsIcon from '@mui/icons-material/Settings';

function SingleDeviceGame({players, agents, openSettings}) {
  const { t } = useTranslation();
  const [options, setOptions] = useState(Array(players).fill({role:'Player', opened:false}));
  const [gameCount, setGameCount] = useState(0);

  useEffect(() => {
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
    console.log(optionsCopy)
  }, [gameCount]);

  const openCard = index => {
    let optionsCopy = [...options];
    optionsCopy[index - 1] = {...optionsCopy[index - 1], opened:true}
    setOptions(optionsCopy)
    alert(optionsCopy[index - 1].role)
  }

  return (
    <div className="single-device-game-container">
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
  );
}

export default SingleDeviceGame;