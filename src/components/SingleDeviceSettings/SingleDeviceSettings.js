import { useTranslation } from 'react-i18next';

import './SingleDeviceSettings.css'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

function SingleDeviceSettings({agents, players, updateAgents, updatePlayers, startGame}) {
  const { t } = useTranslation();

  return (
    <div className="settings-container page-container">
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
      <div className='start-game-btn' onClick={startGame}>{t("Start Game")}</div>
    </div>
  );
}

export default SingleDeviceSettings;