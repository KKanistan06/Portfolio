import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__container">
        <div className="loading-spinner__circle"></div>
        <p className="loading-spinner__text">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
