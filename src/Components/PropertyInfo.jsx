
import IconCard from './IconCard';
import IconCardWithButton from './IconCardWithButton';
import "../Components/PropertyInfo.css";
import BtnPrimaryWithIcon from './BtnPrimaryWithIcon';

const PropertyInfo = () => {
    const iconData =[
        {
            img:'src/assets/icon/verified.png',
            description:'RERA Registered',

        },
        {
            img:'src/assets/icon/home-button.png',
            description:'Residential',

        }
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
        {
            img:'src/assets/icon/maps.png',
            description:'986 Sq. Ft. to 1494 Sq. Ft. (Saleable)',

        },
    ]

    const iconDataForButton =[
        {
            img:'src/assets/icon/home-loan.png',
            title:'Home Loan EMI Starts at $ 58.07k',
            description:'For Provident Botanico',
            listDescription:[
                {
list:'50+ Banks Max Loan Amount',


                },{
                    list:'Lowest ROI',
                },{
                    list:'Fast Disbursement ',
                },
                
                                    
            ] ,
            buttonName:'Get CIBIL-Linked Estimate',

        },
        {
            img:'src/assets/icon/home-interior.png',
            title:'Interiors Package Starting from ₹2.1L',
            description:'For Provident Botanico',
            listDescription:[
                {
                    list:'Made to Order',
                    
                    
                                    },{
                                        list:'Timley Delivery',
                                    },{
                                        list:'Lowest Prices',
                                    },
            ],
            buttonName:'Book a Consultation Now',

        },
        {
            img:'src/assets/icon/valuation.png',
            title:'Professional Valuation Report in $999',
            description:'For Provident Botanico',
            listDescription:[
                {
                    list:'10M Property Seekers',
                    
                   
                                    },{
                                        list:'Fast Disbursement',
                                    },{
                                        list:'Fast Disbursement',
                                    }
            ],
            buttonName:'Request a Professional Valuation',

        },
        {
            img:'src/assets/icon/sell-or-rent-property.png',
            title:'Are you Looking to Advertise a Property',
            description:'For Provident Botanico',
            listDescription:[{
                list:'50+ Banks Max Loan Amount',
              
               
                                },
                            {
                                list:'Transaction Every 15 Minutes',
                            },
                            {
                                list:'50+ Banks Max Loan Amount',
                            },
                            
                            ],
                            buttonName:'Reach Out to Us Now',

        },
    ]

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
                
                
                <BtnPrimaryWithIcon src="src/assets/icon/call.png" cnt="Request More Information or a callback"/>
            </div>

            <div className="property-additional-services">
                <IconCardWithButton data={iconDataForButton} />
            </div>
        </div>
    );
};

export default PropertyInfo;
