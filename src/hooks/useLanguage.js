import { useEffect, useState } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const [isEn, setIsEn] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(isEn ? "en" : "he");
    return () => {};
  }, [isEn]);

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  const changeLanguage = (value) => setIsEn(value);

  return { isEn, changeLanguage };
};
