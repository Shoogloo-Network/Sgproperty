
import './Card.css';
import IconCard from './IconCard';
import BtnPrimaryWithIcon from '../buttons/BtnPrimaryWithIcon';
import { useNavigate } from 'react-router-dom';
const Card = ({  title, description,descriptionPrice,iconCardData,onClick,url }) => {
  const navigate = useNavigate();
  const onImageClick = () => {
    navigate('/detail-page');
  };
  
  
  return (
    <div className="card fade-in" style={{cursor:'pointer' , zIndex:1009}}>
   

{
  url?( <div style={{display:'flex',flexDirection:'row'}}>
  <div style={{width:'50%',padding:'10px',}}>
    <img src={url} alt='card' style={{width:'100%',height:'100%',borderRadius:'10px'}} onClick={onImageClick}/>
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
  ):(
  <div className="card-content" onClick={onClick}>
  <h3 className="card-title">{title}</h3>
  <p className="card-description">{description}</p>
  <p className="card-description-color">{descriptionPrice}</p>
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
