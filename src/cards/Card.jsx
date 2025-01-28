import './Card.css';
import IconCard from './IconCard';
import BtnPrimaryWithIcon from '../buttons/BtnPrimaryWithIcon';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, descriptionPrice, iconCardData, onClick, url }) => {
  const navigate = useNavigate();

  const onImageClick = () => {
    navigate('/detail-page');
  };

  return (
    <div className="card fade-in card-cursor">
      {url ? (
        <div className="card-flex-row">
          <div className="card-image-wrapper">
            <img
              src={url}
              alt="card"
              className="card-image-style"
              onClick={onImageClick}
            />
          </div>
          <div className="card-content card-content-half" onClick={onClick}>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-description-color">{descriptionPrice}</p>
            <div>
              <div>
                <IconCard data={iconCardData} />
              </div>
            </div>
            <BtnPrimaryWithIcon iconName="FaPhone" cnt="Get a Callback" />
          </div>
        </div>
      ) : (
        <div className="card-content" onClick={onClick}>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <p className="card-description-color">{descriptionPrice}</p>
          <div>
            <div>
              <IconCard data={iconCardData} />
            </div>
          </div>
          <BtnPrimaryWithIcon iconName="FaPhone" cnt="Get a Callback" />
        </div>
      )}
    </div>
  );
};

export default Card;
