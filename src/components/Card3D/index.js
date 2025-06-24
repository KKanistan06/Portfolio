import React from 'react';
import './Card3D.scss';

const Card3D = ({ children, className = '', intensity = 15, ...props }) => {
  // Removed all mouse movement handlers
  return (
    <div
      className={`card-3d ${className}`}
      {...props}
    >
      <div className="card-3d__content">
        {children}
      </div>
    </div>
  );
};

export default Card3D;
