import React, { useEffect, useState } from "react";
import style from "./ChangeLang.module.scss";
import UzbFlag from "../../assets/svg/uz.svg";
import RuFlag from "../../assets/svg/ru.svg";
import Eng from "../../assets/svg/eng.svg"
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
const ChangeLang = () => {
  const [lang, setLang] = useLocalization();
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("selectedLang") || "uz"
  );

  useEffect(() => {
    localStorage.setItem("selectedLang", selectedLang);
  }, [selectedLang]);

  const handleLangChange = (event) => {
    const langValue = event.target.value;
    setLang(langValue);
    setSelectedLang(langValue);
  };

  const getFlagIcon = (lang) => {
    switch (lang) {
      case "uz":
        return <img width={25} height={25} src={UzbFlag} alt="Uzbekistan Flag" />;
      case "ru":
        return <img width={25} height={25} src={RuFlag} alt="Russia Flag" />;
      case "en":
        return <img width={25} height={25} src={Eng} alt="UK Flag" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={style.lang}>
        <div>{getFlagIcon(selectedLang)}</div>
        <select
          id="small"
          className={style.selectlang}
          name="language"
          value={selectedLang}
          onChange={handleLangChange}
        >
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>
    </>
  );
};

export default ChangeLang;
