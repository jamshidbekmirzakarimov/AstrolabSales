import React, { useState } from "react";
import style from "./Header.module.scss";
import Logo from "../../assets/svg/logo.svg";
import Call from "../../assets/svg/header-call.svg";
import ChangeLang from "../../components/ChangeLang/ChangeLang";
import useScroll from "../../hooks/useScroll";
import useJavaScript from "../../hooks/useJavaScript";
const Header = () => {
  const { onActive } = useJavaScript();
  const [scrollNumber] = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Главная");
  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <header id="header" className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <img className={style.logo} onClick={(e) => onActive(e, "#header")} src={Logo} alt="logo" />
          <div className={style.end}>
            <nav>
              <ul>
                <li className="nav-title" onClick={(e) => onActive(e, "#Services")}>Xizmatlarimiz</li>
                <li className="nav-title" onClick={(e) => onActive(e, "#Portfolio")}>Portfolio</li>
                <li className="nav-title" onClick={(e) => onActive(e, "#Client")}>Mijozlar</li>
              </ul>
            </nav>
          <ChangeLang/>
            <a className={style.telnumber} href="tel:+998712000321">
            +998 71 200-03-21
            </a>
            <button onClick={(e) => onActive(e, "#article")} className={style.btn}>
              <img src={Call} alt="call" />
              Qayta aloqa
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
