import React from "react";
import style from "./Portfolio.module.scss";
const Portfolio = () => {
  const portfolioData = [
    {
      portfolioImg:
        "https://swagger.astrolab.uz/media/0cb2d049-d3d7-4eb8-85ec-58be8c003fa8.jpg",
      link: "https://landing.astrolab.uz/",
      title: "LANDING ASTROLAB",
    },
    {
      portfolioImg:
        "https://swagger.astrolab.uz/media/526b34b3-5369-4948-951f-7415caecff25.jpg",
      link: "https://smartsandiq.uz/",
      title: "SMART SANDIQ",
    },
    {
      portfolioImg:
        "https://swagger.astrolab.uz/media/8e5d3697-61db-42b0-8790-4341e32c792b.jpg",
      link: "https://juba.uz/",
      title: "JUBA",
    },
    {
      portfolioImg:
        "https://swagger.astrolab.uz/media/aa24c61a-88fa-4e35-800c-27299b86453e.jpg",
      link: "https://americandream.uz/",
      title: "AMERICAN DREAM",
    },
  ];
  return (
    <div id="Portfolio" className={style.portfolio}>
      <div className={style.container}>
        <h2 className={style.title}>Portfolio</h2>
        <div className={style.portfolio__wrapper}>
          {portfolioData.map((item, index) => (
            <div className={style.imgBox}>
              <a href={item.link} target="_blank">
                <img key={index} src={item.portfolioImg} alt="" />
              </a>
              <div className={style.overlay}>
                <a href={item.link} target="_blank">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 -0.5 21 21"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>url [#1424]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-299.000000, -600.000000)"
                        fill="#fff"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M246.400111,448.948654 C244.519883,447.158547 244.754644,444.106996 247.102248,442.631229 C248.809889,441.557573 251.103895,441.880078 252.551048,443.257869 L253.222099,443.896756 C253.641237,444.295804 254.319791,444.295804 254.737858,443.896756 C255.156996,443.498727 255.156996,442.852696 254.737858,442.453648 L254.170788,441.913758 C251.680612,439.542937 247.589992,439.302079 245.025851,441.600438 C242.372737,443.979423 242.32557,447.956645 244.884352,450.391762 L245.642231,451.113316 C246.060298,451.512365 246.739924,451.512365 247.15799,451.113316 C247.577129,450.715288 247.577129,450.069257 247.15799,449.670208 L246.400111,448.948654 Z M261.976841,449.345662 L261.430138,448.825163 C261.011,448.426114 260.332446,448.426114 259.914379,448.825163 C259.495241,449.223192 259.495241,449.869222 259.914379,450.268271 L260.585429,450.907158 C262.032583,452.284948 262.370252,454.469002 261.243616,456.094794 C259.693554,458.329877 256.487306,458.552364 254.60815,456.763278 L253.850271,456.041724 C253.431132,455.642675 252.752578,455.642675 252.334511,456.041724 C251.915373,456.439752 251.915373,457.085783 252.334511,457.484832 L253.092391,458.206386 C255.643669,460.63538 259.806111,460.597618 262.305934,458.09106 C264.742511,455.648799 264.478808,451.727709 261.976841,449.345662 L261.976841,449.345662 Z M257.639668,455.32017 L247.91587,446.062438 C247.497803,445.663389 247.497803,445.017358 247.91587,444.61831 C248.335008,444.220281 249.013562,444.220281 249.431629,444.61831 L259.156499,453.876041 C259.574566,454.27509 259.574566,454.921121 259.156499,455.32017 C258.737361,455.718198 258.058807,455.718198 257.639668,455.32017 L257.639668,455.32017 Z"
                            id="url-[#1424]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p>{item.title}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
