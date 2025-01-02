// src/HomeBanner.js
import { useState } from 'react';
import './HomeBanner.css';

const HomeBanner = () => {
  const [activeTab, setActiveTab] = useState('tabNewp');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('New Projects');

  const handleTabClick = (tab, option) => {
    setActiveTab(tab);
    setSelectedOption(option);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log(`Searching for ${searchQuery} in ${selectedOption}`);
  };

  return (
    <div className="homeDesktopBanner">
      <img
        width="1366"
        height="560"
        src="/assets/images/desktop-banner.jpeg?aio=w-1366;h-560;crop;"
        alt="home banner"
      />
      <div className="container contentBox">
        <h1 className="realEstateHeading">Real Estate Made Real Easy</h1>
        <div className="homeDesktopTabBox">
          <ul>
            <li
              id="newProjectHomeTab"
              data-tab="tabNewp"
              className={`Home_Search_L1 ${activeTab === 'tabNewp' ? 'active' : ''}`}
              onClick={() => handleTabClick('tabNewp', 'New Projects')}
            >
              <button className="tab Home_Search_L1">
                <em className="hti hti-icon1 Home_Search_L1"></em>
                <span className="Home_Search_L1">
                  New <br />
                  Projects
                </span>
              </button>
            </li>
            <li
              id="resaleHomeTab"
              data-tab="tabSale"
              className={`Home_Search_L2 ${activeTab === 'tabSale' ? 'active' : ''}`}
              onClick={() => handleTabClick('tabSale', 'Buy Properties')}
            >
              <button className="tab Home_Search_L2">
                <em className="hti hti-icon2 Home_Search_L2"></em>
                <span className="Home_Search_L2">
                  Buy <br />
                  Properties
                </span>
              </button>
            </li>
            <li
              id="rentalHomeTab"
              data-tab="tabRent"
              className={`Home_Search_L3 ${activeTab === 'tabRent' ? 'active' : ''}`}
              onClick={() => handleTabClick('tabRent', 'Rent Properties')}
            >
              <button className="tab Home_Search_L3">
                <em className="hti hti-icon3 Home_Search_L3"></em>
                <span className="Home_Search_L3">
                  Rent <br />
                  Properties
                </span>
              </button>
            </li>
            <li
              id="pgHomeTab"
              data-tab="tabPg"
              className={`Home_Search_L1 ${activeTab === 'tabPg' ? 'active' : ''}`}
              onClick={() => handleTabClick('tabPg', 'PG / Hostels')}
            >
              <button className="tab Home_Search_L1">
                <em className="hti hti-icon18 Home_Search_L1"></em>
                <span className="Home_Search_L1">
                  PG / <br />
                  Hostels
                </span>
              </button>
            </li>
            <li
              id="plotHomeTab"
              data-tab="tabPlot"
              className={`${activeTab === 'tabPlot' ? 'active' : ''}`}
              onClick={() => handleTabClick('tabPlot', 'Plot & Land')}
            >
              <button className="tab">
                <em className="hti hti-icon4"></em>
                <span>
                  Plot <br />
                  &amp; Land
                </span>
              </button>
            </li>
            <li
              id="commercialHomeTab"
              data-tab="tabCommercial"
              className={`${activeTab === 'tabCommercial' ? 'active' : ''}`}
              onClick={() => handleTabClick('tabCommercial', 'Commercial Properties')}
            >
              <button className="tab">
                <em className="hti hti-icon5"></em>
                <span>
                  Commercial <br />
                  Properties
                </span>
              </button>
            </li>
            <li
              id="agentHomeTab"
              data-tab="tabAgent"
              className={`Home_Search_L4 ${activeTab === 'tabAgent' ? 'active' : ''}`}
              onClick={() => handleTabClick('tabAgent', 'Find Agents')}
            >
              <button className="tab Home_Search_L4">
                <em className="hti hti-icon6 Home_Search_L4"></em>
                <span className="Home_Search_L4">
                  Find <br />
                  Agents
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div id="newdAutoForm" className="homeBlackBox noTrendingSearch">
          <div className="homeDesktopSearchBox">
            <form onSubmit={handleSearchSubmit}>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="New Projects">New Projects</option>
                <option value="Buy Properties">Buy Properties</option>
                <option value="Rent Properties">Rent Properties</option>
                <option value="PG / Hostels">PG / Hostels</option>
                <option value="Plot & Land">Plot & Land</option>
                <option value="Commercial Properties">Commercial Properties</option>
                <option value="Find Agents">Find Agents</option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;