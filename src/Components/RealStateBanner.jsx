import React, { useState } from 'react';
import RealStateHomeSearchBar from './RealStateHomeSearchBar';
import IconCard from './IconCard';
import './RealStateBanner.css';
import { FaBuilding, FaHome, FaKey, FaBed, FaMap, FaCity } from 'react-icons/fa';

const RealStateBanner = () => {
  const [activeTab, setActiveTab] = useState('buy');

  const handleIconCardClick = (type) => {
    setActiveTab(type);
  };

  

  return (
    <div className="banner-container">
      <div className="banner-content">
       
        <RealStateHomeSearchBar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default RealStateBanner;
