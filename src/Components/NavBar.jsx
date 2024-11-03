// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about-project');
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
        {
            title: 'About Project',
            id: 'about-project',
            dropdown: ['Project Overview', 'Price List', 'Why Invest?', 'FAQ']
        },
        {
            title: 'Project Overview',
            id: 'project-overview',
            dropdown: null
        },
        {
            title: 'Top Experts',
            id: 'top-experts',
            dropdown: null
        },
        
        {
            title: 'Floor Plans',
            id: 'floor-plans',
            dropdown: ['2 BHK', '3 BHK']
        },
       
        {
            title: 'Data Intelligence',
            id: 'data-intelligence',
            dropdown: ['Project Sales Trend']
        },
        {
            title: 'Amenities',
            id: 'amenities',
            dropdown: null
        },
        {
            title: 'Specifications',
            id: 'specifications',
            dropdown: null
        },
        
        {
            title: 'About Builder',
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
