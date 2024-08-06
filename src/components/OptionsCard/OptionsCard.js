import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './OptionsCard.css'

function OptionCard({index, value, opened, openCard}) {
  const { t } = useTranslation();
  return (
    <div key={index} className={`card-option ${opened ? 'opened' : ''}`} onClick={() => openCard(index)}>
      {t("Player")} {index}
    </div>
  );
}

export default OptionCard;