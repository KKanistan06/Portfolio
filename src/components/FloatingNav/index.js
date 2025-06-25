import React, { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import './FloatingNav.scss';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 100px
      setIsVisible(window.scrollY > 100);
      
      // Update active section
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

  const handleNavigate = (href, id) => {
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`floating-nav ${isVisible ? 'floating-nav--visible' : ''}`}>
      <div className="floating-nav__container">
        {NAVIGATION_ITEMS.map((item, index) => (
          <button
            key={item.id}
            className={`floating-nav__item ${
              activeSection === item.id ? 'floating-nav__item--active' : ''
            }`}
            onClick={() => handleNavigate(item.href, item.id)}
            style={{ animationDelay: `${index * 0.1}s` }}
            title={item.name}
          >
            <span className="floating-nav__dot"></span>
            <span className="floating-nav__label">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNav;
