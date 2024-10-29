// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100; // Adjust to highlight at the right time

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                setActiveSection(sectionId);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        document.querySelector(`#${sectionId}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setActiveSection(sectionId);
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a
                        href="#overview"
                        onClick={() => scrollToSection('overview')}
                        className={activeSection === 'overview' ? 'active' : ''}
                    >
                        Overview
                    </a>
                </li>
                <li>
                    <a
                        href="#floor-plans"
                        onClick={() => scrollToSection('floor-plans')}
                        className={activeSection === 'floor-plans' ? 'active' : ''}
                    >
                        Floor Plans
                    </a>
                </li>
                <li>
                    <a
                        href="#gallery"
                        onClick={() => scrollToSection('gallery')}
                        className={activeSection === 'gallery' ? 'active' : ''}
                    >
                        Gallery
                    </a>
                </li>
                <li>
                    <a
                        href="#amenities"
                        onClick={() => scrollToSection('amenities')}
                        className={activeSection === 'amenities' ? 'active' : ''}
                    >
                        Amenities
                    </a>
                </li>
                <li>
                    <a
                        href="#price"
                        onClick={() => scrollToSection('price')}
                        className={activeSection === 'price' ? 'active' : ''}
                    >
                        Price
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={() => scrollToSection('contact')}
                        className={activeSection === 'contact' ? 'active' : ''}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
