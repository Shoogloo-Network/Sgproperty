// Navbar.js
import { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import UserSectionList from '../gallery/components/UserSectionList';
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
        // {
        //     title: 'City',
        //     id: 'about-project',
        //     dropdown: ['Project Overview', 'Price List', 'Why Invest?', 'FAQ'],
        //     url:'/'
        // },
        // {
        //     title: 'Buy',
        //     id: 'project-overview',
        //     dropdown: null,
        //      url:'/'
        // },
        // {
        //     title: 'Top Experts',
        //     id: 'top-experts',
        //     dropdown: null,
        //      url:'/'
        // },
        
        // {
        //     title: 'Rent',
        //     id: 'floor-plans',
        //     dropdown: ['2 BHK', '3 BHK'],
        //      url:'/'
        // },
       
        {
            title: 'Projects',
            id: 'data-intelligence',
            dropdown: null,
             url:'/search'
        },
        {
            title: 'Agents',
            id: 'amenities',
            dropdown: null,
             url:'/agents'
        },
        {
            title: 'Services',
            id: 'specifications',
            dropdown: null,
             url:'/owner-plans'
        },
        
        {
            title: 'Resources',
            id: 'about-builder',
          
            dropdown: ['Modular Kitchen', 'Wardrobe'],
             url:'/home-interior'
        },
        // {
        //     title: 'Similar Projects',
        //     id: 'similar-projects',
        //     dropdown: null,
        //      url:'/'
        // }
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
            <h2 className='gradient-text' onClick={()=>{navigate('/')}}>SgProperty</h2>
                <ul className="nav-list">
                    
                    {navItems.map((item) => (
                        <li 
                            key={item.id}
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveDropdown(item.id)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                            to={item.url}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.title}
                                {item.dropdown && (
                                    <span className="arrow-down">▼</span>
                                )}
                            </Link>
                            {item.dropdown && activeDropdown === item.id && (
                                <div className="dropdown-menu">
                                    {item.dropdown.map((subItem) => (
                                        <Link 
                                            key={subItem}
                                            to={`/home-interior#${item.id}-${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="dropdown-item"
                                        >
                                            {subItem}
                                        </Link>
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
