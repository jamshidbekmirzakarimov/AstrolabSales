import React, { useState } from "react";
import style from "./Contact.module.scss";
import BigLogo from "../../assets/svg/big-logo.svg";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendMessage = () => {
    if (!phoneNumber) {
      return alert("First name and phone number required"); // Fixed alert message
    }

    const bot = {
      TOKEN: "6343007118:AAGwbwQo1LteIjSszg1clg2ls0-59C4-7jM",
      chatID: "-1001800659362",
      message: `
-Phone Number: ${phoneNumber.replace(/[\(\)]/g, "")}`,
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
        setPhoneNumber("");
        toast.success("Message sent");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        if (error.message === "Unauthorized") {
          toast.error("Unauthorized: Could not send the message");
        } else {
          toast.error("Error sending message");
        }
      });
  };

  const handleLastNameKeyPress = (e) => {
    const charCode = e.which || e.keyCode;

    if (
      !(charCode >= 65 && charCode <= 90) &&
      !(charCode >= 97 && charCode <= 122) &&
      charCode !== 32
    ) {
      e.preventDefault();
    }
  };

  const isButtonDisabled = !/\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}/.test(
    phoneNumber
  );

  return (
    <>
      <section className={style.contact}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.contacttext}>
              <h2>Bizga aloqaga chiqing va bepul konsultatsiya oling!</h2>
              <p>
                Telefon raqamingizni qoldiring va menejerlarimiz sizga aloqaga
                chiqadi
              </p>
              <div className={style.forma}>
                <InputMask
                  min={12}
                  minLength={30} // This is incorrect, it should be maxLength
                  mask="+\9\9\8\ (99) 999-99-99"
                  maskChar=" "
                  required={true}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Telefon raqam"
                  type="tel"
                />
                <button type="button"
                  disabled={isButtonDisabled} // Fixed disabled attribute
                  onClick={handleSendMessage}
                >
                  Raqam qoldirish
                </button>
              </div>
            </div>
            <img src={BigLogo} alt="" />
          </div>
        </div>

        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
