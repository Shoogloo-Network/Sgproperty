import { useState } from 'react';
import AgentsCard from './AgentsCard';
import './Agents.css';
import TopAgents from './TopAgents';

const Agents = () => {
  const [agents, setAgents] = useState(false);
  const [location, setLocation] = useState(false);
  const [propertyType, setPropertyType] = useState(false);
  const [experience, setExperience] = useState(false);
  const [language, setLanguage] = useState(false);

  return (
    <>
      <div className="tab-container">
        <div className="tab-agent tab-agent-1" onClick={() => setAgents(!agents)}>
          <i className="fa-solid fa-user"></i>
          <p className="tab-agent-name">Agent</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="tab-agent tab-agent-2" onClick={() => setLocation(!location)}>
          <img src='' alt='' className="tab-agent-image"/>
          <p className="tab-agent-name">Location</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="tab-agent tab-agent-3" onClick={() => setPropertyType(!propertyType)}>
          <img src='' alt='' className="tab-agent-image"/>
          <p className="tab-agent-name">Property Type</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="tab-agent tab-agent-4" onClick={() => setExperience(!experience)}>
          <img src='' alt='' className="tab-agent-image"/>
          <p className="tab-agent-name">By Experience</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="tab-agent tab-agent-5" onClick={() => setLanguage(!language)}>
          <img src='' alt='' className="tab-agent-image"/>
          <p className="tab-agent-name">Language</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      {agents && (
        <div className='agent-sub-menu'>
          <div className='tab-agent'>
            <i className="fa-solid fa-user"></i>
            <p className="tab-agent-name">Agent 1</p>
          </div>
          <div className='tab-agent'>
            <i className="fa-solid fa-user"></i>
            <p className="tab-agent-name">Agent 2</p>
          </div>
          <div className='tab-agent'>
            <i className="fa-solid fa-user"></i>
            <p className="tab-agent-name">Agent 3</p>
          </div>
          <div className='tab-agent'>
            <i className="fa-solid fa-user"></i>
            <p className="tab-agent-name">Agent 4</p>
          </div>
          <div className='tab-agent'>
            <i className="fa-solid fa-user"></i>
            <p className="tab-agent-name">Agent 5</p>
          </div>
        </div>
      )}

      {location && (
        <div className='location-sub-menu'>
          <label className='location-label'>
            <input type="checkbox" />
            Chatterpur, Delhi
          </label>
          <label className='location-label'>
            <input type="checkbox" />
            Saket, Delhi
          </label>
          <label className='location-label'>
            <input type="checkbox" />
            Gurugram, Haryana
          </label>
          <label className='location-label'>
            <input type="checkbox" />
            Palm, Delhi
          </label>
          <label className='location-label'>
            <input type="checkbox" />
            Noida, Uttar Pradesh
          </label>
          <label className='location-label'>
            <input type="checkbox" />
            Haridwar, Uttarakhand
          </label>
        </div>
      )}

      {propertyType && (
        <div className='propertyType-submenu'>
          <label className='location-label'>
            <input type="radio" name="propertyType" />
            New Projects
          </label>
          <label className='location-label'>
            <input type="radio" name="propertyType" />
            Rental/Resale
          </label>
        </div>
      )}

      <div style={{ display: "flex", margin: '20px 40px', gap: '30px' }}>
        <div style={{ width: '70%' }}>
          <AgentsCard />
        </div>
        <div style={{ width: '30%' }}>
          <TopAgents />
        </div>
      </div>
    </>
  );
};

export default Agents;
