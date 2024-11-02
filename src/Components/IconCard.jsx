import React from 'react';
import './IconCard.css';

const IconCard = ({ icon, title, subtitle, isNew, onClick, type }) => {
  return (
    <div className="icon-card" onClick={() => onClick(type)}>
      {isNew && <span className="new-badge">New</span>}
      <div className="icon-wrapper">
        {icon}
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default IconCard;
