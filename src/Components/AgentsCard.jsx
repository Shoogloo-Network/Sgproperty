import  { useEffect, useState } from 'react';
import './AgentsCard.css'
import BtnPrimaryWithIcon from './BtnPrimaryWithIcon';
const AgentsCard = () => {
    const [dataRes, setDataRes] = useState([]);

    useEffect(() => {
        data();
    }, []);

    const data = async () => {
        try {
            const response = await fetch('http://localhost:8000/agents');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const dataRes = await response.json();
            setDataRes(dataRes);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const onButtonClick = ()=>{
        console.log("Button clicked");
    }
    return (
        <div className="agents-card">
        {dataRes.map((item) => (
            <div key={item.id} className="agent">
                <div className="agent-profile">
                    <img src={item.profileImage} alt={item.title} height={130} width={130} />
                    <p>View Profile</p>
                </div>

                <div className="agent-details">
                    <div className="agent-partners">
                        <div className="trusted-partner listing-flex">
                        <i className="fa-solid fa-certificate"></i>  <p>Trusted Partner</p>
                        </div>
                        <div className="preferred-partner listing-flex">
                        <i className="fa-solid fa-circle-check"></i><p>Preferred Partner</p>
                        </div>
                    </div>
                    <div className="agent-name">
                        <p>{item.agentName}</p>
                    </div>
                    <div className="agent-company-location">
                        <div className="company-name">
                            <p>{item.agentCompanyName}</p>
                        </div>
                        <div className="location">
                            <p>{item.agentLocation}</p>
                        </div>
                    </div>
                    <div className="agent-experience-language-listing">
                        <div className="experience listing-flex">
                        <i className="fa-solid fa-calendar-minus"></i> <p>{item.agentExperience}</p>
                        </div>
                        <div className="listing listing-flex">
                        <i className="fa-regular fa-rectangle-list"></i> <p>{item.listing}</p>
                        </div>
                        <div className="language listing-flex">
                        <i className="fa-solid fa-language"></i> <p>{item.agentLanguage}</p>
                        </div>
                       
                    </div>
                    <div className="agent-contact">
                        <div className="whatsapp">
                            <button>WhatsApp</button>
                        </div>
                        <div className="appointment">
                          <BtnPrimaryWithIcon iconName='FaMobileAlt' cnt="Book an Appointment"  onClick={onButtonClick}/>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
};

export default AgentsCard;
