import React from 'react';
import './Card.css';
import IconCard from './IconCard';
import BtnPrimaryWithIcon from './BtnPrimaryWithIcon';

const Card = ({  title, description,descriptionPrice,iconCardData }) => {
  
  return (
    <div className="card">
   
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-description-color" style={{color:'#5f449b',fontSize:'18px',fontWeight:'bold' , marginTop:'5px'}}>{descriptionPrice}</p>
        <div >
          <div >
            <IconCard data={iconCardData}/>
          </div>
          
        </div>
        <BtnPrimaryWithIcon src="src/assets/icon/call.png" cnt="Get a Callback" />
      </div>
    </div>
  );
}

export default Card;
