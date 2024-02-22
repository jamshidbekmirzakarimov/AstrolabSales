import React, { useState } from "react";
import style from "./Services.module.scss";
import Web from "../../assets/svg/web.svg";
import App from "../../assets/svg/app.svg";
import TelegramBot from "../../assets/svg/telegram-bot.svg";
import Auto from "../../assets/svg/auto.svg";
import Test from "../../assets/svg/test.svg";
import Button from "../../ui/Button/Button";
import ContactModal from "../../components/ContactModal/ContactModal";
import Oval1 from "../../assets/svg/services-oval1.svg";
import Oval2 from "../../assets/svg/services-oval2.svg";
const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const dataServices = [
    {
      id: 1,
      image: Web,
      title: "Veb-saytlar",
      desc: "Biz veb-saytlarni vizitka saytlaridan korporativ portallarga qadar ishlab chiqamiz. Dizaynni tanlashda mijozning xohish-istaklariga e'tibor qaratiladi, saytni tarkib bilan to'ldirish, moslashuvchan tartib kiradi.",
      colors: "#010066",
    },
    {
      id: 1,
      image: App,
      title: "Mobil ilovalar",
      desc: "Bizning ixtisosimiz Android va IOS-da progressiv mobil ilovalarni yaratishdir. Ilovalarning o'zi biznesning keyingi rivojlanishi va rivojlanishini hisobga olgan holda yaratilgan.",
      colors: "#FD6C04",
    },
    {
      id: 1,
      image: TelegramBot,
      title: "Telegram botlari",
      desc: "Biz har qanday murakkablikdagi va turli xil funktsiyalarga ega Botlarni ishlab chiqamiz. Bundan tashqari, biz botni CRM tizimingiz bilan birlashtira olamiz.",
      colors: "#206CFF",
    },
    {
      id: 1,
      image: Auto,
      title: "Biznesni avtomatlashtirish",
      desc: "Biz biznesni avtomatlashtirish tizimlarini yaratamiz. Axborot veb-portalini yaratishdan tashqari, biz ish jarayonini tashkil etish va topshiriqlarning bajarilishini nazorat qilish usullarini ishlab chiqamiz",
      colors: "#3AB094",
    },
    {
      id: 1,
      image: Test,
      title: "Dasturiy ta'minotni sinovdan o'tkazish",
      desc: "Biz dasturiy ta'minotni sinab ko'ramiz, foydalanish uchun bir qator testlarni o'tkazamiz, kodni tozaligini tekshiramiz va mavjud xatolarning sabablari haqida gaplashamiz.",
      colors: "#F06C7A",
    },
    {
      id: 1,
      image: Web,
      title: "Outstaffing",
      desc: "Autstaffing-bu xodimlarni kompaniya xodimlari uchun olib qo'yish va uni autstaffing kompaniyasida ro'yxatdan o'tkazish. Autstaffer ish haqini to'lash, soliqlarni to'lash, mehnat qonunchiligini bajarish va boshqalar funktsiyalarini o'z zimmasiga oladi.",
      colors: "#FFDA0A",
    },
  ];

  return (
    <>
      <section id="Services" className={style.services}>
        <div className="container">
          <h2>Bizning xizmatlarimiz</h2>
          <ul>
            {dataServices.map((item) => (
              <li key={item.id}>
                <div className={style.cardTop}>
                  <img src={item.image} alt="web" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <Button onClick={handleOpenModal} color={item.colors} />
              </li>
            ))}
          </ul>
        </div>
        <img className={style.oval1} src={Oval1} alt="" />
        <img className={style.oval2} src={Oval2} alt="" />
      </section>
      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Services;
