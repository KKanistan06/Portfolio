import React from 'react';
import './SectionBackground.scss';

const SectionBackground = ({ sectionName, children }) => {
  return (
    <div className={`section-background section-background--${sectionName}`}>
      <div className="section-background__shapes">
        {/* Only 3 small shapes per section */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`section-shape section-shape-${(i % 2) + 1}`}
            style={{
              left: `${20 + (i * 30)}%`,
              top: `${20 + (i * 20)}%`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default SectionBackground;

