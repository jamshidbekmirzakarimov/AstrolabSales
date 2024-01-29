import React from "react";
import { useState } from "react";
import style from "./ContactModal.module.scss";
import Supermodal from "../../components/Supermodal/Supermodal";
import modalLogo from "../../assets/svg/modallogo.svg";
import InputMask from "react-input-mask";
import { toast } from "react-hot-toast";
import Close from "../../assets/svg/close.svg";
const ContactModal = ({ setIsModalOpen, isModalOpen }) => {
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault;
    const bot = {
      TOKEN: "6343007118:AAGwbwQo1LteIjSszg1clg2ls0-59C4-7jM",
      chatID: "-1001800659362",
      message: `
  -Ism: ${lastName}
  -Telefon nomer: ${phoneNumber.replace(/[\(\)]/g, "")},
  `,
    };

    const apiUrl = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: bot.chatID,
        text: bot.message,
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Message sent:", data);

        setLastName("");
        setPhoneNumber("");

        toast.success("Buyurtmangiz qabul qilindi!");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        if (error.message === "Unauthorized") {
          toast.error("Unauthorized: Could not send the message");
        } else {
          toast.error("Error sending message");
        }
      });
    setIsModalOpen(false);
  };

  const isButtonDisabled =
    !/^[A-Za-z]+$/.test(lastName.replace(/\s/g, "")) ||
    !/\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}/.test(phoneNumber);
  return (
    <>
      {isModalOpen && (
        <Supermodal close={setIsModalOpen}>
          <div className={style.modal}>
            <div>
              <img src={modalLogo} alt="" />
            </div>
            <p>Aloqa uchun ma’lumotlaringizni qoldiring</p>
            <form>
              <div className={style.inputBox}>
                <input
                  className={style.input}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Ism"
                  required
                  pattern="[^0-9]"
                />
                <InputMask
                  className={style.input}
                  min={12}
                  minLength={30} // This is incorrect, it should be maxLength
                  mask="+\9\9\8\ (99) 999-99-99"
                  maskChar=" "
                  required
                  placeholder="Telefon raqamingizni kiriting"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <button
                className={`${isButtonDisabled ? "opacity0" : "opacity1"}`}
                disabled={isButtonDisabled}
                onClick={handleSendMessage}
              >
                YUBORISH
              </button>
            </form>
            <img
              onClick={() => setIsModalOpen(false)}
              width={20}
              height={20}
              className={style.close}
              src={Close}
              alt=""
            />
          </div>
        </Supermodal>
      )}
    </>
  );
};

export default ContactModal;
