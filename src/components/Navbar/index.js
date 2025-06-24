import React, { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import ThemeToggle from '../ThemeToggle';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = NAVIGATION_ITEMS.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <div className="navbar__brand">
          <span className="navbar__logo">KK</span>
        </div>

        <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__list">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id} className="navbar__item">
                <button
                  className={`navbar__link ${
                    activeSection === item.id ? 'navbar__link--active' : ''
                  }`}
                  onClick={() => handleNavClick(item.href, item.id)}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar__actions">
          <ThemeToggle />
          <button
            className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
