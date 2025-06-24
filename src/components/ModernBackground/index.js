import React, { useEffect, useRef } from 'react';
import './ModernBackground.scss';

const ModernBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.2; // Reduced scroll effect
      
      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="modern-background" ref={containerRef}>
      <div className="geometric-shapes">
        {/* Reduced from 15 to 6 shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`shape shape-${(i % 3) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="floating-orbs">
        {/* Reduced from 8 to 4 orbs */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`orb orb-${i + 1}`}
            style={{
              animationDelay: `${i * 1}s`
            }}
          />
        ))}
      </div>
      
      <div className="grid-overlay"></div>
    </div>
  );
};

export default ModernBackground;
