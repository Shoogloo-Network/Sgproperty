import  { useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ContactForm from './ContactForm';
import IconCard from './IconCard';
import '../Components/CustomImageGallery.css';

const CustomImageGallery = ({close}) => {
    const [selectedName, setSelectedName] = useState('projects');
    const [activeIndex, setActiveIndex] = useState(null); // State to track active button index
  // Define an array of images with their respective details
  const images = [
    {
        projects:[{
            original: 'src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg',
            thumbnail: 'src/assets/thumbnail/provident-botanico-project-project-large-image1-1056.avif',
            description: 'Cover Image',
          },
          {
            original: 'src/assets/propertyImage/provident-botanico-project-master-plan-image1-3047.jpg',
            thumbnail: 'src/assets/thumbnail/provident-botanico-project-master-plan-image1-3047.avif',
            description: 'Master Plan Image',
          },
          {
            original: 'src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            thumbnail: 'src/assets/thumbnail/provident-botanico-project-clubhouse-external-image1-2344.avif',
            description: 'Clubhouse External Image',
          },
          {
              original: 'src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-project-large-image1-1056.avif',
              description: 'Sports Facilities Image',
            },
            {
              original: 'src/assets/propertyImage/provident-botanico-project-master-plan-image1-3047.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-master-plan-image1-3047.avif',
              description: 'Amenities Features',
            },
            {
              original: 'src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-clubhouse-external-image1-2344.avif',
              description: 'Floor Plans',
            },
            {
              original: 'src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-project-large-image1-1056.avif',
              description: 'Push Creative',
            },
            {
              original: 'src/assets/propertyImage/provident-botanico-project-master-plan-image1-3047.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-master-plan-image1-3047.avif',
              description: 'Videos',
            },],
           units:[{
                original: 'src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg',
                thumbnail: 'src/assets/thumbnail/provident-botanico-project-project-large-image1-1056.avif',
                description: 'Cover Image',
              },
              {
                original: 'src/assets/propertyImage/provident-botanico-project-master-plan-image1-3047.jpg',
                thumbnail: 'src/assets/thumbnail/provident-botanico-project-master-plan-image1-3047.avif',
                description: 'Master Plan Image',
              },
              {
                original: 'src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
                thumbnail: 'src/assets/thumbnail/provident-botanico-project-clubhouse-external-image1-2344.avif',
                description: 'Clubhouse External Image',
              },
              {
                  original: 'src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg',
                  thumbnail: 'src/assets/thumbnail/provident-botanico-project-project-large-image1-1056.avif',
                  description: 'Sports Facilities Image',
                },
                {
                  original: 'src/assets/propertyImage/provident-botanico-project-master-plan-image1-3047.jpg',
                  thumbnail: 'src/assets/thumbnail/provident-botanico-project-master-plan-image1-3047.avif',
                  description: 'Amenities Features',
                },
                {
                  original: 'src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
                  thumbnail: 'src/assets/thumbnail/provident-botanico-project-clubhouse-external-image1-2344.avif',
                  description: 'Floor Plans',
                },
                {
                  original: 'src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg',
                  thumbnail: 'src/assets/thumbnail/provident-botanico-project-project-large-image1-1056.avif',
                  description: 'Push Creative',
                },
                {
                  original: 'src/assets/propertyImage/provident-botanico-project-master-plan-image1-3047.jpg',
                  thumbnail: 'src/assets/thumbnail/provident-botanico-project-master-plan-image1-3047.avif',
                  description: 'Videos',
                },],
 locality:[{
            original: 'src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg',
            thumbnail: 'src/assets/thumbnail/provident-botanico-project-project-large-image1-1056.avif',
            description: 'Cover Image',
          },
          {
            original: 'src/assets/propertyImage/provident-botanico-project-master-plan-image1-3047.jpg',
            thumbnail: 'src/assets/thumbnail/provident-botanico-project-master-plan-image1-3047.avif',
            description: 'Master Plan Image',
          },
          {
            original: 'src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            thumbnail: 'src/assets/thumbnail/provident-botanico-project-clubhouse-external-image1-2344.avif',
            description: 'Clubhouse External Image',
          },
          {
              original: 'src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-project-large-image1-1056.avif',
              description: 'Sports Facilities Image',
            },
            {
              original: 'src/assets/propertyImage/provident-botanico-project-master-plan-image1-3047.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-master-plan-image1-3047.avif',
              description: 'Amenities Features',
            },
            {
              original: 'src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-clubhouse-external-image1-2344.avif',
              description: 'Floor Plans',
            },
            {
              original: 'src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-project-large-image1-1056.avif',
              description: 'Push Creative',
            },
            {
              original: 'src/assets/propertyImage/provident-botanico-project-master-plan-image1-3047.jpg',
              thumbnail: 'src/assets/thumbnail/provident-botanico-project-master-plan-image1-3047.avif',
              description: 'Videos',
            },],
    }
     

    // Add more images as needed
  ];

  const iconCardData = [
    {
        img:'src/assets/icon/zero-brokerage.svg',
        title:'Zero Brokerage',
        description:'100% Service, 0% Brokerage',
    },
    {
        img:'src/assets/icon/lowest-price.svg',
        title:'Lowest Price Guaranteed',
        description:'If you find a lower price anywhere, tell us and we will match it.',
    },
    {
        img:'src/assets/icon/full-service-support.svg',
        title:'Full Service Support',
        description:'Our sales personnel are accountable for every step',
    },
  ]

  // Use a ref to access ImageGallery methods
  const galleryRef = useRef(null);

  // Function to navigate to a specific slide
  const handleSlideToIndex = (index) => {
    galleryRef.current.slideToIndex(index);
    setActiveIndex(index); // Update active button index
    
  };

  return (
    <div className="custom-image-gallery">
    {/* Header */}
    <div className="header">
      <div className='header-options'><p    className={selectedName === 'projects' ? 'active' : ''}onClick={() => { setSelectedName('projects'); handleSlideToIndex(0); }}>Projects</p>
      <p className={selectedName === 'units' ? 'active' : ''} onClick={() => { setSelectedName('units'); handleSlideToIndex(0); }}>Units</p>
      <p    className={selectedName === 'locality' ? 'active' : ''} onClick={() => { setSelectedName('locality'); handleSlideToIndex(0); }}>Locality</p></div>
      <div><span onClick={close}> X</span></div>
    </div>

    {/* Layout for Gallery and Form/Zero Brokerage Section */}
    <div className="gallery-and-info">
      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="gallery-buttons">
          {images[0][selectedName].map((image, index) => (
            <button key={index} onClick={() => handleSlideToIndex(index)}  className={activeIndex === index ? 'active' : ''}>
              {image.description || `Image ${index + 1}`}
            </button>
          ))}
        </div>

        {/* Image Gallery */}

        <ImageGallery
          ref={galleryRef}
          items={images[0][selectedName]}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={false}
          showNav={true}
          
        />
      </div>

      {/* Form and IconCard Section */}
      <div className="info-section">
        <ContactForm />
        <h4>Why Invest through Square Yards?</h4>
        <IconCard data={iconCardData} />
      </div>
    </div>
  </div>
  );
};

export default CustomImageGallery;
