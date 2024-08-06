import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './SingleDeviceGame.css'

function SingleDevice() {
  const { t } = useTranslation();

  return (
    <div className="single-device-game-container">
      <div className="title">{t("Would you find the Agent?")}</div>
    </div>
  );
}

export default SingleDevice;