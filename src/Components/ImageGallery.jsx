import  { useState, useEffect } from 'react';
import '../Components/ImageGallery.css';

const ImageGallery = ({ onClickImage }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/galleryImages')
      .then((response) => response.json())
      .then((data) => setImageData(data[0])) // Assuming there's one set of images
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="imageWrapperDiv" onClick={onClickImage}>
        <div className="singleImageDiv">
          <img src={imageData.mainImage} alt="Property image" />
        </div>
        <div className="multipleImageDiv">
          {imageData.multipleImages.map((image, index) => (
            <img key={index} src={image} alt={`Property image ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
