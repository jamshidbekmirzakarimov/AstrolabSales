import React from "react";
import style from "./Client.module.scss";
import profileImg1 from "../../assets/images/clientprofile1.png";
import profileImg2 from "../../assets/images/profileimg2.png";
import profileImg3 from "../../assets/images/profileimg3.png";
import dot1 from "../../assets/svg/dot.svg";
import dot2 from "../../assets/svg/dot2.svg";
import starIcon1 from "../../assets/svg/clientstar.svg";
const Client = () => {
  const data = [
    {
      profileImg: profileImg1,
      name: "Jahongir B",
      country: "Uzbekistan",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. has  the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been ",
      staricon: [
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
      ],
      dotIcon: dot1,
    },
    {
      profileImg: profileImg2,
      name: "Sardor B",
      country: "Uzbekistan",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. has  the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been ",
      staricon: [
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
      ],
      dotIcon: dot2,
    },
    {
      profileImg: profileImg3,
      name: "Nasiba M",
      country: "Uzbekistan",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. has  the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been ",
      staricon: [
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
        {
          stars: starIcon1,
        },
      ],
    },
  ];
  return (
    <div className={style.client} id="Client">
      <div className={style.container}>
        <h2>Mijozlarimizning biz haqimizda fikirlari</h2>

        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div className={style.client__wrapper}>
                <div className={style.client__left}>
                  <img src={item.profileImg} alt="" />
                  <div>
                    <p className={style.client__left__name}>{item.name}</p>
                    <p className={style.client__left__country}>
                      {item.country}
                    </p>
                  </div>
                </div>

                <div className={style.client__right}>
                  <img src={item.dotIcon} alt="" />
                </div>
              </div>
              <p className={style.client__text}>{item.text}</p>
              <div className={style.client__star}>
                {item?.staricon?.map((item, i) => (
                  <img key={i} src={item.stars} alt="" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Client;
