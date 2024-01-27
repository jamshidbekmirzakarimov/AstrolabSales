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
const Customer = () => {
  return (
    <div className={style.customer}>
      <div className={style.container}>
        <h2>Hamkorlarimiz</h2>

        <div className={style.customer__card}>
          <img src={customerImg1} alt="" />
          <img src={customerImg2} alt="" />
          <img src={customerImg3} alt="" />
          <img src={customerImg4} alt="" />
          <img src={customerImg5} alt="" />
          <img src={customerImg6} alt="" />
          <img src={customerImg7} alt="" />
          <img src={customerImg8} alt="" />
          <img src={customerImg9} alt="" />
          <img src={customerImg10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customer;
