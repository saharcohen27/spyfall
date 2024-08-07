import { useState } from "react";

import SingleDeviceSettings from "../SingleDeviceSettings/SingleDeviceSettings";
import SingleDeviceGame from "../SingleDeviceGame/SingleDeviceGame";
import "./SingleDevice.css";

function SingleDevice() {
  const [players, setPlayers] = useState(6);
  const [agents, setAgents] = useState(2);
  const [isSettingsOpen, setIsSettingsOpen] = useState(true)

  const updateAgents = (chg) => {
    if (agents + chg === 0 || agents + chg === 17) return;
    if (agents + chg > players) return;
    setAgents(prev => prev + chg);
  };

  const updatePlayers = (chg) => {
    if (players + chg === 0 || players + chg === 17) return;
    if (agents > players + chg) return;
    setPlayers((prev) => prev + chg);
  };

  const startGame = () => {
    setIsSettingsOpen(false);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  if (isSettingsOpen) {
    return (
      <SingleDeviceSettings
        agents={agents}
        players={players}
        updatePlayers={updatePlayers}
        updateAgents={updateAgents}
        startGame={startGame}
      />
    );
  }

  return (
    <SingleDeviceGame
      agents={agents}
      players={players}
      openSettings={openSettings}
    />
  );
}

export default SingleDevice;
