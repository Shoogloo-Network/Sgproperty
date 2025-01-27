import { useEffect, useState } from "react";
import "./AgentDetails.css";
import Card from "../cards/Card";
import BtnPrimaryWithIcon from '../buttons/BtnPrimaryWithIcon';
import { fetchData } from "../api/data";
const AgentDetails = () => {
  const [dataRes, setDataRes] = useState([]);
  const [CardData, setCardData] = useState([]);

  useEffect(() => {
    fetchData("agents",setDataRes);
    fetchData("card-data",setCardData);
   
  }, []);

 

  const onCardClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    //  setShowForm(true);
     console.log('Clicked Card Data:'); // Added console log
 
  }
  const onButtonClick = ()=>{
    console.log("Button clicked");
}
return (
    <>
      <div className="agent-detail-main-div">
        <div className="agent-detail-left ">
          <div key={dataRes[0]?.id} className="agent-detail agent-white-box agent-detail-mobile">
            <div className="agent-profile">
              <img
                src={dataRes[0]?.profileImage}
                alt={dataRes[0]?.title}
                height={130}
                width={130}
              />
            </div>
  
            <div className="agent-details">
              <div className="agent-name">
                <h1>{dataRes[0]?.agentName}</h1>
              </div>
              <div className="agent-partners">
                <div className="trusted-partner listing-flex">
                  <i className="fa-solid fa-certificate"></i> <p>Trusted Partner</p>
                </div>
                <div className="preferred-partner listing-flex">
                  <i className="fa-solid fa-circle-check"></i><p>Preferred Partner</p>
                </div>
              </div>
              <hr/>
  
              <div className="agent-company-location">
                <div className="company-name">
                  <h1>{dataRes[0]?.agentCompanyName} : </h1>
                </div>
                <div className="location">
                  <h1>{dataRes[0]?.agentLocation}</h1>
                </div>
              </div>
  
              <div className="agent-contact-detail">
                <div className="whatsapp">
                  <button>WhatsApp</button>
                </div>
                <div className="appointment">
                  <BtnPrimaryWithIcon
                    iconName="FaMobileAlt"
                    cnt="Book an Appointment"
                    onClick={onButtonClick}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="agent-specializations agent-white-box">
            <h1>Specializations</h1>
            <hr />
            <div className="specializations-list">
              <div className="specialization-item">
                <p>Rental</p>
              </div>
              <div className="specialization-item">
                <p>Resale</p>
              </div>
              <div className="specialization-item">
                <p>New Sale</p>
              </div>
              <div className="specialization-item">
                <p>Commercial</p>
              </div>
              <div className="specialization-item">
                <p>Residential</p>
              </div>
            </div>
          </div>
          <div className="agent-interests-skills agent-white-box">
            <h1>Interest & Skill</h1>
            <div className="interests-skills-list">
              <div className="interest-skill-item">
                <p>News & Current Affairs</p>
              </div>
              <div className="interest-skill-item">
                <p>Politics & History</p>
              </div>
              <div className="interest-skill-item">
                <p>Sports & Entertainment</p>
              </div>
              <div className="interest-skill-item">
                <p>News & Current Affairs</p>
              </div>
              <div className="interest-skill-item">
                <p>News & Current Affairs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="agent-detail-right">
          <div className="agent-about agent-white-box" >
            <h1>About</h1>
            <hr />
            <div className="about-details">
              <div className="about-item">
                <i className="fa-solid fa-calendar"></i>
                <p>
                  <span className="about-item-span">Experience:</span> 12 Years
                </p>
              </div>
              <div className="about-item">
                <i className="fa-solid fa-people-group"></i>
                <p>
                  <span className="about-item-span">Team Member Count:</span> 6-10 Members
                </p>
              </div>
              <div className="about-item">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  <span className="about-item-span">Office Location:</span> Dwarka Mor, Delhi
                </p>
              </div>
              <div className="about-item">
                <i className="fa-solid fa-language"></i>
                <p>
                  <span className="about-item-span">Languages:</span> Bengali, English, Hindi
                </p>
              </div>
            </div>
          </div>
          <div className="agent-cards">
            {CardData.map((cardItem, index) => {
              return (
                <div key={index} className="agent-card-item">
                  <Card
                    image={cardItem.image}
                    title={cardItem.title}
                    description={cardItem.description}
                    descriptionPrice={cardItem.descriptionPrice}
                    iconCardData={cardItem.iconCardData}
                    url={cardItem.backgroundImage}
                    onClick={onCardClick}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
  
};

export default AgentDetails;
