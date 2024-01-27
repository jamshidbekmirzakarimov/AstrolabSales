import React from 'react'
import portfolioImg1 from "../../assets/images/portfolio1.png"
import portfolioImg2 from "../../assets/images/portfolio2.png"
import portfolioImg3 from "../../assets/images/portfolio3.png"
import portfolioImg4 from "../../assets/images/portfolio4.png"
import style from "./Portfolio.module.scss"
const Portfolio = () => {
  const portfolioData = [
    {
      portfolioImg: portfolioImg1
    },
    {
      portfolioImg: portfolioImg2
    },
    {
      portfolioImg: portfolioImg3
    },
    {
      portfolioImg: portfolioImg4
    }
  ]
  return (
    <div id='Portfolio' className={style.portfolio}>
        <div className={style.container}>
          <h2>Portfolio</h2>
            <div className={style.portfolio__wrapper}>
                {portfolioData.map((item, index) => (
                  <img key={index} src={item.portfolioImg} alt="" />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio