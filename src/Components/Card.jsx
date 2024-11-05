import React from 'react';
import './Card.css';
import IconCard from './IconCard';
import BtnPrimaryWithIcon from './BtnPrimaryWithIcon';

const Card = ({ title, description, descriptionPrice, iconCardData, onClick, url }) => {
  return (
    <div className="card" style={{cursor:'pointer', zIndex:1009}}>
      {url ? (
        <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{width:'50%', padding:'10px'}}>
            <img src={url} alt='card' style={{width:'100%', height:'100%', borderRadius:'10px'}}/>
          </div>
          <div className="card-content" onClick={onClick} style={{width:'50%'}}>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-description-color" style={{color:'#5f449b',fontSize:'18px',fontWeight:'bold' , marginTop:'5px'}}>{descriptionPrice}</p>
            <div >
              <div >
                <IconCard data={iconCardData}/>
              </div>
              
            </div>
            <BtnPrimaryWithIcon iconName='FaPhone' cnt="Get a Callback"  />
          </div>
        </div>
      ) : (
        <div className="card-content" onClick={onClick}>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <p className="card-description-color" style={{color:'#5f449b',fontSize:'18px',fontWeight:'bold' , marginTop:'5px'}}>{descriptionPrice}</p>
          <div >
            <div >
              <IconCard data={iconCardData}/>
            </div>
            
          </div>
          <BtnPrimaryWithIcon iconName='FaPhone' cnt="Get a Callback"  />
        </div>
      )}
    </div>
  );
}

export default Card;
