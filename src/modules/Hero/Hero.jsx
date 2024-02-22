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
                <h1>Mijozlarngiz sonini sayt orqali ko’paytiring!</h1>
              </div>
              <p>
              Sayt orqali o’z mahsulot yoki xizmatlaringizni sotuvlarini amalga oshiring!
              </p>
              <h4>*Natija bo’lmasa pul to’lamang!</h4>
              <button onClick={handleOpenModal} className={style.btn}>
                Buyurtma berish
              </button>
            </div>
            <div className={style.end}>
                <img width={376} height={486} className={style.heroImg} src={HeroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Hero;
