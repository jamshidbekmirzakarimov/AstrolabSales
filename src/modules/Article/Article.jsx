import style from "./Article.module.scss";
import callIcon from "../../assets/svg/call.svg";
import sendIcon from "../../assets/svg/send.svg";
import ContactModal from "../../components/ContactModal/ContactModal";
import { useState } from "react";

const Article = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={style.article} id="article">
        <div className={style.container}>
          <div className={style.article__wrapper}>
            <div className={style.article__left}>
              <h2>Bizga aloqaga chiqing va bepul konsultatsiya oling!</h2>
              <p>
                Malumotlaringizni qoldiring va menejerlarimiz sizga aloqaga
                chiqadi
              </p>

              <div>
                <button onClick={handleOpenModal}>
                  <img src={callIcon} alt="" />
                  Qayta aloqa uchun
                </button>
                <a href="tel: +998 71 200 03 21">+998 71 200 03 21</a>
              </div>
            </div>

            <div className={style.article__right}>
              <img src={sendIcon} alt="" />
            </div>
          </div>
        </div>

        <ContactModal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      </div>
    </>
  );
};

export default Article;
