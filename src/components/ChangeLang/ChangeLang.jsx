import React from "react";
import style from "./ChangeLang.module.scss";
import UzbFlag from "../../assets/svg/uz.svg";
import RuFlag from "../../assets/svg/ru.svg";
const ChangeLang = () => {
  return (
    <>
      <div className={style.lang}>
        <img width={25} height={25} src={UzbFlag} alt="uzb flag" />
        <img width={25} height={25} src={RuFlag} alt="ru flag" />
      </div>
    </>
  );
};

export default ChangeLang;
