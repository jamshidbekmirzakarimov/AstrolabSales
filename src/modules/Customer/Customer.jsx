import React from "react";
import customerImg1 from "../../assets/images/hamkor1.png";
import customerImg2 from "../../assets/images/hamkor2.png";
import customerImg3 from "../../assets/images/hamkor3.png";
import customerImg4 from "../../assets/images/hamkor4.png";
import customerImg5 from "../../assets/images/hamkor5.png";
import customerImg6 from "../../assets/images/hamkor6.png";
import customerImg7 from "../../assets/images/hamkor7.png";
import customerImg8 from "../../assets/images/hamkor8.png";
import customerImg9 from "../../assets/images/hamkor9.png";
import customerImg10 from "../../assets/images/hamkor10.png";
import wer from "../../assets/svg/customerbg.svg";
import style from "./Customer.module.scss";
import Temur from "../../assets/images/temur.jpg"
const Customer = () => {
  return (
    <div className={style.customer} id="Client">
      <div className={style.container}>
        <h2>Bizning hamkorlarimiz!</h2>

        <div className={style.customer__card}>
          <div className={style.customerBox}>
            <img
              src={"https://juba.uz/wp-content/uploads/2021/02/a51-150x150.png"}
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={"https://juba.uz/wp-content/uploads/2021/02/a3-150x150.png"}
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2021/02/asaxiy-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-150x150.png"
              }
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2021/04/logo13-removebg-preview-150x150.png"
              }
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2021/02/A7-150x150.png"
              }
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2021/02/a2-150x150.png"
              }
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2021/02/a6-150x150.png"
              }
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2021/04/GRY_LO9GO_ONAYLI-150x150.png"
              }
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2021/02/A8-150x150.png"
              }
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2022/05/a21-150x150.png"
              }
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2022/05/uva-150x150.png"
              }
              alt=""
            />
          </div>
          <div className={style.customerBox}>
            <img
              src={
                "https://juba.uz/wp-content/uploads/2021/02/a1-150x150.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className={style.comment}>
       <div className={style.comment_box}>
       <p className={style.comment_title}>Agar kimda-kim bizning qudratimizga shubxa qilsa, biz qurgan binolarga boqsin</p>
          <h3 className={style.comment_title}>-Amir Temur</h3>
       </div>
          <img src={Temur} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customer;
