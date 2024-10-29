
import '../Components/ImageGallery.css';

const ImageGallery = ({ onClickImage }) => {
    
  return (
    <>
      <div className="imageWrapperDiv" onClick={onClickImage}>
        <div className="singleImageDiv">
            <img src='src/assets/propertyImage/provident-botanico-project-project-large-image1-1056.jpg' alt='Property image'/>
        </div>
        <div className="multipleImageDiv">
        <img src='src/assets/propertyImage/provident-botanico-project-amenities-features1-3750.jpg' alt='Main Property image'/>
        <img src='src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg' alt=' ClubHouse Property image'/>
        <img src='src/assets/propertyImage/provident-botanico-project-amenities-features1-3750.jpg' alt=' botanico Property image'/>
        <img src='src/assets/propertyImage/provident-botanico-project-amenities-features1-3750.jpg' alt=' amenties Property image'/>
        </div>
      </div>
    </>
  )
}

export default ImageGallery
