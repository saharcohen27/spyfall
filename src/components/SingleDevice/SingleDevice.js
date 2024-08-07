import { useState } from "react";

import SingleDeviceSettings from "../SingleDeviceSettings/SingleDeviceSettings";
import SingleDeviceGame from "../SingleDeviceGame/SingleDeviceGame";
import "./SingleDevice.css";

function SingleDevice() {
  const [players, setPlayers] = useState(6);
  const [spies, setSpies] = useState(2);
  const [isSettingsOpen, setIsSettingsOpen] = useState(true)

  const updateSpies = (chg) => {
    if (spies + chg === 0 || spies + chg === 17) return;
    if (spies + chg > players) return;
    setSpies(prev => prev + chg);
  };

  const updatePlayers = (chg) => {
    if (players + chg === 0 || players + chg === 17) return;
    if (spies > players + chg) return;
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
        spies={spies}
        players={players}
        updatePlayers={updatePlayers}
        updateSpies={updateSpies}
        startGame={startGame}
      />
    );
  }

  return (
    <SingleDeviceGame
      spies={spies}
      players={players}
      openSettings={openSettings}
    />
  );
}

export default SingleDevice;
