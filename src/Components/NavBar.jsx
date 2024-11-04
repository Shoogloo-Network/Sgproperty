// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about-project');
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
        {
            title: 'City',
            id: 'about-project',
            dropdown: ['Project Overview', 'Price List', 'Why Invest?', 'FAQ']
        },
        {
            title: 'Buy',
            id: 'project-overview',
            dropdown: null
        },
        {
            title: 'Top Experts',
            id: 'top-experts',
            dropdown: null
        },
        
        {
            title: 'Rent',
            id: 'floor-plans',
            dropdown: ['2 BHK', '3 BHK']
        },
       
        {
            title: 'Projects',
            id: 'data-intelligence',
            dropdown: ['Project Sales Trend']
        },
        {
            title: 'Agents',
            id: 'amenities',
            dropdown: null
        },
        {
            title: 'Services',
            id: 'specifications',
            dropdown: null
        },
        
        {
            title: 'Resources',
            id: 'about-builder',
            dropdown: null
        },
        {
            title: 'Similar Projects',
            id: 'similar-projects',
            dropdown: null
        }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
            {/* <img src="src/assets/logo/logo.svg" alt="logo" height={50} width={100} /> */}
            <h1 className='gradient-text'>Shoogloo Real Estate</h1>
                <ul className="nav-list">
                    
                    {navItems.map((item) => (
                        <li 
                            key={item.id}
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveDropdown(item.id)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <a
                                href={`#${item.id}`}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.title}
                                {item.dropdown && (
                                    <span className="arrow-down">▼</span>
                                )}
                            </a>
                            {item.dropdown && activeDropdown === item.id && (
                                <div className="dropdown-menu">
                                    {item.dropdown.map((subItem) => (
                                        <a 
                                            key={subItem}
                                            href={`#${item.id}-${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="dropdown-item"
                                        >
                                            {subItem}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
