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
      title: "Веб-сайты",
      desc: "Разрабатываем сайты масштабами от сайтов-визиток до корпоративных порталов. При выборе дизайна упор делается на желания клиента, входит наполнение сайта контентом, адаптивная вёрстка.",
      colors: "#010066",
    },
    {
      id: 1,
      image: App,
      title: "Мобильные приложения",
      desc: "Наша специализация - создавать прогрессивные мобильные приложения на Android и IOS. Сами приложения созданы с учётом последующего развития и продвижения бизнеса.",
      colors: "#FD6C04",
    },
    {
      id: 1,
      image: TelegramBot,
      title: "Телеграм-боты",
      desc: "Мы разрабатываем ботов любой сложности и с самым разным функционалом. Кроме этого, мы можем интегрировать бота с вашей CRM-системой.",
      colors: "#206CFF",
    },
    {
      id: 1,
      image: Auto,
      title: "Автоматизация бизнеса",
      desc: "Создаём системы автоматизации бизнеса. Помимо создания информационного web-портала, разрабатываем методы организации рабочего процесса и контроля выполнения поручений",
      colors: "#3AB094",
    },
    {
      id: 1,
      image: Test,
      title: "Тестирование ПО",
      desc: "Протестируем ПО, проведем ряд тестов на юзабилити, проверим код на чистоту и расскажем о причинах имеющихся багов.",
      colors: "#F06C7A",
    },
    {
      id: 1,
      image: Web,
      title: "Аутстаффинг",
      desc: "Аутстаффинг – это вывод персонала за штат компании и его оформление в аутстаффинговой компании. Аутстаффер берет на себя функции выплаты заработной платы, уплаты налогов, исполнения трудового законодательства и т.д.",
      colors: "#FFDA0A",
    },
  ];

  return (
    <>
      <section id="Services" className={style.services}>
        <div className="container">
          <h2>Xizmatlarimiz</h2>
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
