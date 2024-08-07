import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LanguageIcon from '@mui/icons-material/Language';
import logo from '../../logo.svg';
import './NavBar.css'

import '../../i18n';

function NavBar() {
  const { t } = useTranslation();
  const [isEn, setIsEn] = useState(true);
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    setIsEn(prev => !prev)
    i18n.changeLanguage(isEn ? 'en' : 'he');
  }
  
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
 }, [i18n, i18n.language]);
  
  return (

    <header className="navbar-container">
      <div className="lang-icon" onClick={()=>changeLanguage()}><LanguageIcon fontSize='large'/></div>
      <Link to='/'>
        <div className="game-name">{t("The Agent")} 🕵️</div>
      </Link>
      <img className="logo" src={logo} />
    </header>
  );
}

export default NavBar;