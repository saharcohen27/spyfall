import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import "./NotFound.css"

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found-container">
      <div className="title not-found">
        {t("404 Not Found / How did you get here?")}
      </div>
      <Link to='/' className="go-back-btn">{t("Go Home")}</Link>
    </div>
  );
}

export default NotFound;