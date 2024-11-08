// Navbar.js
import { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import UserSectionList from './UserSectionList';
const Navbar = () => {
  
    const userName = JSON.parse(localStorage.getItem('user'));
    const [activeSection, setActiveSection] = useState('about-project');
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const handleLogout = () => {
       
        localStorage.removeItem('isLogin');
        navigate('/login');
    }
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

   

    const navigate=useNavigate();

    const handleClick=(item,index,setHoveredIndex)=>{
        const queryParams = new URLSearchParams({
            section: item.id
        }).toString();
        
        navigate(`/user?${queryParams}`);
        setHoveredIndex(index);
    }
    return (
        <nav className="navbar">
            <div className="navbar-container">
            {/* <img src="src/assets/logo/logo.svg" alt="logo" height={50} width={100} /> */}
            <h2 className='gradient-text' onClick={()=>{navigate('/')}}>Shoogloo Real Estate</h2>
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

                    <li className="user-icon-container"
                        onMouseEnter={() => setShowUserMenu(true)}
                        onMouseLeave={() => setShowUserMenu(false)}>
                        <i className="fas fa-user"></i>
                        {showUserMenu && (
                            <div className="user-dropdown-menu">
                                <UserSectionList onClick={handleClick} logout={handleLogout}/>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
