import IconCard from './IconCard';
import IconCardWithButton from './IconCardWithButton';
import "../Components/PropertyInfo.css";
import BtnPrimaryWithIcon from './BtnPrimaryWithIcon';
import { useEffect, useState } from 'react';
import FormPopup from './FormPopup';
const iconData =[
    {
        img:'src/assets/icon/verified.png',
        description:'RERA Registered',

    },
    {
        img:'src/assets/icon/home-button.png',
        description:'Residential',

    },
] ;

const iconData1 =[
    {
        img:'src/assets/icon/building.png',
        description:'New Launch',

    },
    {
        img:'src/assets/icon/building-1.png',
        description:'2,3 BHK Flats',

    },
    {
        img:'src/assets/icon/maps.png',
        description:'986 Sq. Ft. to 1494 Sq. Ft. (Saleable)',

    },
   
] ; 
const PropertyInfo = () => {
    const [showForm, setShowForm] = useState(false);
    const [iconDataForButton , setIconDataForButton] =useState([]);
   
    useEffect(()=>{
 fetchData("iconDataForButton",setIconDataForButton);
    },[])
const fetchData = async (endpoint,setter)=>{
try{
    const response = await fetch(`http://localhost:8000/${endpoint}`);
const data = await response.json();
setter(data);
}catch(error){
    console.error(error);
}
}
   return (
        <div className="property-info-container">
            <div className="property-info-header">
                <div className="icon-card-group"><IconCard data={iconData}  /></div>
                <div className="rating">
                    <span className="stars">★★★★★</span>
                    <a >10 Rating</a>
                </div>
            </div>

            <div className="property-title-section">
                <h1 className="property-name">Provident Botanico</h1>
                <div className="property-location">
                    <h4>Whitefield, Bangalore</h4>
                    <div className="map-link">
                        <img src="src/assets/icon/location.png" alt="location" />
                        <p>See On Map</p>
                    </div>
                </div>
            </div>

            <div className="property-pricing-section">
                <div>

                <div className="price-info">
                    <h2 className="price-range">₹86.00 Lac - 1.49 Cr</h2>
                    <img src="src/assets/icon/info.png" alt="Info" className="info-icon" />
                </div>
                <div className="additional-info"><IconCard data={iconData1} /></div>
                </div>
                
                
                <BtnPrimaryWithIcon 
                   iconName='FaPhone'
                    cnt="Request More Information or a callback"
                    onClick={() => setShowForm(true)}
                />
            </div>

            <div className="property-additional-services">
                <IconCardWithButton data={iconDataForButton} />
            </div>

            {showForm && <FormPopup onClose={() => setShowForm(false)} />}
        </div>
    );
};

export default PropertyInfo;
