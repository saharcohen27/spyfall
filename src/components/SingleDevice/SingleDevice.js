import { useState } from "react";

import SingleDeviceSettings from "../SingleDeviceSettings/SingleDeviceSettings";
import SingleDeviceGame from "../SingleDeviceGame/SingleDeviceGame";
import "./SingleDevice.css";

function SingleDevice() {
  const [addedPlaces, setAddedPlaces] = useState([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  const startGame = () => {
    setIsSettingsOpen(false);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  if (isSettingsOpen) {
    return (
      <SingleDeviceSettings
        addedPlaces={addedPlaces}
        setAddedPlaces={setAddedPlaces}
        startGame={startGame}
      />
    );
  }

  return (
    <SingleDeviceGame
      spies={spies}
      openSettings={openSettings}
      addedPlaces={addedPlaces}
    />
  );
}

export default SingleDevice;
