import React from 'react'
import './IconCardBtnWithoutHover.css';
const IconCardBtnWithoutHover = ({data}) => {
  return (
    <div className="icon-card-with-button-container-without-hover">
    {data.map((item, index) => (
      <div key={index+1} className="cardBtnMain-without-hover">
        <div className="cardBtnContent-without-hover">
          <div className="cardBtnImage-without-hover">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="cardBtnText-without-hover">
            <h4 className="cardBtnTitle-without-hover">{item.title}</h4>
            <p className="cardBtnDescription-without-hover">{item.description}</p>
          </div>
        </div>
        <div className="cardBtn-without-hover">
          
          <button className="cardBtnAction-without-hover">{item.buttonName}</button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default IconCardBtnWithoutHover
