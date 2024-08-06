import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './SingleDevice.css'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

function SingleDevice() {
  const { t } = useTranslation();

  const [players, setPlayers] = useState(3);
  const [agents, setAgents] = useState(1);

  const updateAgents = (chg) => {
    if (agents + chg === 0 || agents + chg === 17) return;
    if (agents + chg > players) return;
    setAgents(prev => prev + chg )
  } 

  const updatePlayers = (chg) => {
    if (players + chg === 0 || players + chg === 17) return;
    if (agents > players + chg) return;
    setPlayers(prev => prev + chg)
  } 

  return (
    <div className="single-device-container">
      <div className="title">{t("Game Settings")}</div>
      <div className='setting'>
        <label className='setting-label'><PeopleIcon/>{t("Total players")}:</label>
        <div className="setting-area">
          <RemoveIcon className='change-btn dec' onClick={() => updatePlayers(-1)}/>
          {players}
          <AddIcon className='change-btn inc' onClick={() => updatePlayers(1)}/>
        </div>
      </div>
      <div className='setting'>
        <label className='setting-label'><DirectionsRunIcon/>{t("Total agents")}:</label>
        <div className="setting-area">
          <RemoveIcon className='change-btn dec' onClick={() => updateAgents(-1)}/>
          {agents}
          <AddIcon className='change-btn inc' onClick={() => updateAgents(1)}/>
        </div>
      </div>
      <Link to='/single-device-game'>
        <div className='start-game-btn'>{t("Start Game")}</div>
      </Link>
    </div>
  );
}

export default SingleDevice;