import './ProjectTabHome.css';
import { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import UnitTable from './UnitTable';
import IconCard from './IconCard';

const ProjectTabHome = () => {
    const data = [
        { unitType: '2 BHK 986 Sq. Ft. Apartment', area: '986 Sq. Ft. (Saleable)', price: '₹ 86.00 Lac' },
        { unitType: '2 BHK 1088 Sq. Ft. Apartment', area: '1088 Sq. Ft. (Saleable)', price: '₹ 1.02 Cr' },
        { unitType: '3 BHK 1334 Sq. Ft. Apartment', area: '1334 Sq. Ft. (Saleable)', price: '₹ 1.25 Cr' },
        { unitType: '3 BHK 1494 Sq. Ft. Apartment', area: '1494 Sq. Ft. (Saleable)', price: '₹ 1.49 Cr' },
      ];
    const iconCardData = [
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
        {
            img:'src/assets/icon/buildings.png',
            title:'Project Status',
            description:'New Launch',
        },
    ]
  const [activeSection, setActiveSection] = useState('');
  const [activeDiv, setActiveDiv] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleDivClick = (index) => {
    setActiveDiv(index === activeDiv ? null : index);
  };

  const handleAccordionClick = (index, event) => {
    event.stopPropagation();
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div>
      <div className="navbarHome">
        <ul className="navList">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              onSetActive={handleSetActive}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About Provident Botanico
            </Link>
          </li>
          <li>
            <Link
              to="overview"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              onSetActive={handleSetActive}
              className={activeSection === 'overview' ? 'active' : ''}
            >
              Project Overview
            </Link>
          </li>
          <li>
            <Link
              to="experts"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              onSetActive={handleSetActive}
              className={activeSection === 'experts' ? 'active' : ''}
            >
              Top Experts
            </Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <section id="about" className="section">
          <h2>About Provident Botanico</h2>
          <div className="info-divs" id='aboutInfoDivs'>
            <div
              className={`info-div ${activeDiv === 0 ? 'active' : ''}`}
              onClick={() => handleDivClick(0)}
            >
              <h3>Project Overview</h3>
              {activeDiv === 0 && <p>Introducing Provident Botanico, a prestigious real-estate project located in the heart of Whitefield, Bangalore. Strategically situated near Dabaspete Hosur Highway and Whitefield Main Road, this project offers seamless connectivity to major employment hubs, educational institutions, and entertainment spots. Surrounded by lush greenery, Provident Botanico is designed to be an eco-friendly and serene oasis amidst the bustle of city life.</p>}
            </div>
            <div
              className={`info-div ${activeDiv === 1 ? 'active' : ''}`}
              onClick={() => handleDivClick(1)}
            >
              <h3>Price List</h3>
              {activeDiv === 1 && <div><UnitTable data={data}/></div>}
            </div>
            <div
              className={`info-div ${activeDiv === 2 ? 'active' : ''}`}
              onClick={() => handleDivClick(2)}
            >
              <h3>Why Invest?</h3>
              {activeDiv === 2 && <div className='infoDivList'>
                <ul>
                    <li>Unbeatable location near Dabaspete and Whitefield Main Road.</li>
                    <li>Strategically connected to Hosur Highway and major highways.</li>
                    <li>Spacious apartments with master bedrooms featuring oil-bound distemper walls.</li>
                    <li>Pristine amenities include 24x7 security, power backup, and rainwater harvesting.</li>
                    <li>Convenient access to major IT hubs and commercial centers.</li>
                </ul>
                </div>}
            </div>
            <div
              className={`info-div ${activeDiv === 3 ? 'active' : ''}`}
              onClick={() => handleDivClick(3)}
            >
              <h3>FAQ</h3>
              {activeDiv === 3 && (
                
                <div className="accordion">
                <div
                  className={`accordion-item ${activeAccordion === 0 ? 'active' : ''}`}
                  onClick={(e) => handleAccordionClick(0, e)}
                >
                  <div className="accordion-title">
                    <h3>Accordion Item 1</h3>
                    <i className={`fas ${activeAccordion === 0 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </div>
                  <div className="accordion-content">
                    {activeAccordion === 0 && (
                      <p>
                        Provident Botanico is a premier residential project offering
                        modern amenities and a prime location.
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`accordion-item ${activeAccordion === 1 ? 'active' : ''}`}
                  onClick={(e) => handleAccordionClick(1, e)}
                >
                  <div className="accordion-title">
                    <h3>Accordion Item 2</h3>
                    <i className={`fas ${activeAccordion === 1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </div>
                  <div className="accordion-content">
                    {activeAccordion === 1 && (
                      <p>
                        The project boasts spacious apartments with beautiful
                        landscaping and advanced facilities.
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`accordion-item ${activeAccordion === 2 ? 'active' : ''}`}
                  onClick={(e) => handleAccordionClick(2, e)}
                >
                  <div className="accordion-title">
                    <h3>Accordion Item 3</h3>
                    <i className={`fas ${activeAccordion === 2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </div>
                  <div className="accordion-content">
                    {activeAccordion === 2 && (
                      <p>
                        With a focus on sustainability, Provident Botanico
                        integrates eco-friendly practices in its design and
                        construction.
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`accordion-item ${activeAccordion === 3 ? 'active' : ''}`}
                  onClick={(e) => handleAccordionClick(3, e)}
                >
                  <div className="accordion-title">
                    <h3>Accordion Item 4</h3>
                    <i className={`fas ${activeAccordion === 3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </div>
                  <div className="accordion-content">
                    {activeAccordion === 3 && (
                      <p>
                        Residents will enjoy a vibrant community with access to
                        top-notch educational and recreational facilities.
                      </p>
                    )}
                  </div>
                </div>
              </div>



                
              )}
            </div>
          </div>
        </section>
        <section id="overview" className="section">
          <h2>Provident Botanico Project Overview</h2>
          <div className='overviewSectionCardDiv'> 
          <IconCard data={iconCardData} style={{display:'flex', flexWrap:'wrap',flexDirection:'column'}}/>
         
          </div>
        </section>
        <section id="experts" className="section">
          <h2>Top Experts</h2>
       <div>
        <p>Content of Top Experts</p>
        </div>   
        </section>
      </div>
    </div>
  );
};

export default ProjectTabHome;
