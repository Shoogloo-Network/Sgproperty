import { useState } from 'react';
import './HomeInteriorCategory.css';

const HomeInteriorCategory = () => {
  const [activeTab, setActiveTab] = useState('Living Room');
  const [cardData, setCardData] = useState([
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
  ]);

  const tabs = [
    'Living Room',
    'Modular Kitchen',
    'Wardrobe',
    'Master Bedroom',
    'Kids Room',
    'Kitchen Walls Tiles',
    'Kitchen False Ceiling'
  ];

  const data = {
    'Living Room': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
     
    ],
    'Modular Kitchen': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
    ],
    'Wardrobe': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
     
    ],
    'Master Bedroom': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },

    ],
    'Kids Room': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
    ],
    'Kitchen Walls Tiles': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
    ],
    'Kitchen False Ceiling': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCardData(data[tab] || []);
  };

  return (
    <div className="homeinterior-container">
      <div className="homeinterior-section">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`homeinterior-item ${activeTab === tab ? 'homeinterior-item-active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            <p>{tab}</p>
          </div>
        ))}
      </div>
      <div className="homeinterior-section-card">
        {cardData.map((card, index) => (
          <div key={index} className="homeinterior-item-card">
            <img src={card.imgSrc} alt="Card Image" />
            <h4>{card.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeInteriorCategory;
