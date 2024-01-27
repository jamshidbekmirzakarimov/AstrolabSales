import style from "./Footer.module.scss";
import footerWhiteLogo from "../../assets/svg/footerWhiteLogo.svg";
import youtube from "../../assets/svg/youtube.svg";
import telegram from "../../assets/svg/telegram.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import useScroll from "../../hooks/useScroll";
import useJavaScript from "../../hooks/useJavaScript";
import { useState } from "react";

const Footer = () => {
  const { onActive } = useJavaScript();
  const [scrollNumber] = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Главная");
  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <footer className={style.footer}>
      <div className={style.footer__top}>
        <div className={style.container}>
          <div className={style.footer__top__wrapper}>
            <div>
              <a onClick={(e) => onActive(e, "#header")} href="/">
                <img src={footerWhiteLogo} alt="" />
              </a>
            </div>

            <ul>
              <li>
                <a className="nav-title" onClick={(e) => onActive(e, "#Services")} href="/">Xizmatlarimiz</a>
              </li>
              <li>
                <a className="nav-title" onClick={(e) => onActive(e, "#Portfolio")} href="/">Portfolio</a>
              </li>
              <li>
                <a className="nav-title" onClick={(e) => onActive(e, "#Client")} href="/">Mijozlar</a>
              </li>
            </ul>

            <div>
              <a href="/">
                <img src={youtube} alt="" />
              </a>
              <a href="/">
                <img src={telegram} alt="" />
              </a>
              <a href="/">
                <img src={facebook} alt="" />
              </a>
              <a href="/">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>

          <div className={style.footer__bottom__wrapper}>
            <p>Все права защищены 2023 </p>
            <a className={style.footer__bottom__gmail} href="">
              info@astrolab.uz
            </a>
            <a
              className={style.footer__bottom__tel}
              href="tel: +998712000321"
            >
              +998 71 200 03 21
            </a>
          </div>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.footer__bottom}>
          <h3>© ASTROLAB GROUP </h3>
          <p>Design by Bazarov Jahongir</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
