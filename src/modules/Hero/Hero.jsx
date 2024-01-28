import React, { useState } from "react";
import style from "./Hero.module.scss";
import Star from "../../assets/svg/star.svg";
import Star2 from "../../assets/svg/star2.svg";
import Star3 from "../../assets/svg/star3.svg";
import Star4 from "../../assets/svg/star4.svg";
import HeroImg from "../../assets/images/hero-bg.png";
import HeroImgMob from "../../assets/images/hero-bg-mobile.png";
import CircleText from "../../assets/svg/circle-text.svg";
import ContactModal from "../../components/ContactModal/ContactModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <section className={style.hero}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.textbox}>
              <div className={style.star}>
                <h1>Imkoniyatlaringizni biz bilan kengaytiring</h1>
                <img src={Star} alt="star" />
              </div>
              <p>
                Biznesingizning kelajagini jadallik bilan rivojlanib kelayotgan
                kompaniya bilan birga zabt eting. Bizning xizmatlarimiz orqali
                biznesingizda daromadingiz va mijozlaringiz miqdorini oshiring.
              </p>
              <button onClick={handleOpenModal} className={style.btn}>
                Buyurtma berish
              </button>
            </div>
            <div className={style.end}>
              <img className={style.heroImg}  src={HeroImg} alt=""  />
              <div className={style.circle}>
                <img className={style.textcircle} src={CircleText} alt="" />
                <div className={style.minicircle}></div>
              </div>
            </div>
            <img className={style.star3} src={Star3} alt="" />
            <img className={style.star2} src={Star2} alt="" />
          </div>
        </div>
        <img className={style.star4} src={Star4} alt="" />
      </section>
      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default Hero;
