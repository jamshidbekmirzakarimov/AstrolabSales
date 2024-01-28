import React, { useState } from "react";
import style from "./Header.module.scss";
import Logo from "../../assets/svg/logo.svg";
import Call from "../../assets/svg/header-call.svg";
import ChangeLang from "../../components/ChangeLang/ChangeLang";
import useScroll from "../../hooks/useScroll";
import useJavaScript from "../../hooks/useJavaScript";
import Burger from "../../assets/svg/burger.svg";
import Close from "../../assets/svg/close.svg";
const Header = () => {
  const { onActive } = useJavaScript();
  const [scrollNumber] = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Главная");
  const handleClick = (item) => {
    setActiveItem(item);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    if (isOpen) {
    }
  };
  return (
    <header id="header" className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <img
            className={style.logo}
            onClick={(e) => onActive(e, "#header")}
            src={Logo}
            alt="logo"
          />
          <div className={style.end}>
            <nav>
              <ul>
                <li
                  className="nav-title"
                  onClick={(e) => onActive(e, "#Services")}
                >
                  Xizmatlarimiz
                </li>
                <li
                  className="nav-title"
                  onClick={(e) => onActive(e, "#Portfolio")}
                >
                  Portfolio
                </li>
                <li
                  className="nav-title"
                  onClick={(e) => onActive(e, "#Client")}
                >
                  Mijozlar
                </li>
              </ul>
            </nav>
            <ChangeLang />
            <div className={style.endBox}>
              <a className={style.telnumber} href="tel:+998712000321">
                +998 71 200-03-21
              </a>
              <button
                onClick={(e) => onActive(e, "#article")}
                className={style.btn}
              >
                <img src={Call} alt="call" />
                Qayta aloqa
              </button>
            </div>
              <img onClick={handleOpenMenu} src={Burger} alt="" />
          </div>
        </div>
      </div>

      <div
        onClick={handleOverlayClick}
        className={`${style.menu} ${isOpen ? style.active : ""}`}
      >
        <button className={style.close} onClick={handleCloseMenu}>
          <img width={20} height={20} src={Close} alt="" />
        </button>
        <div className={style.wrapper}>
          <div className="container">
            <div className={style.box}>
              <nav>
                <ul>
                  <li
                    className="nav-title"
                    onClick={(e) => {
                      onActive(e, "#Services");
                      handleCloseMenu();
                    }}
                  >
                    Xizmatlarimiz
                  </li>
                  <li
                    className="nav-title"
                    onClick={(e) => {onActive(e, "#Portfolio");  handleCloseMenu();}}
                  >
                    Portfolio
                  </li>
                  <li
                    className="nav-title"
                    onClick={(e) => {onActive(e, "#Client");  handleCloseMenu();}}
                  >
                    Mijozlar
                  </li>
                </ul>
              </nav>
              <a onClick={handleCloseMenu} className={style.telnumber} href="tel:+998712000321">
                +998 71 200-03-21
              </a>
              <button
                onClick={(e) => {onActive(e, "#article"); handleCloseMenu()}}
                className={style.btn}
              >
                <img src={Call} alt="call" />
                Qayta aloqa
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
