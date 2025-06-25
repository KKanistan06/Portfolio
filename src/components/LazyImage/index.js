import React, { useState, useRef, useEffect } from 'react';
import './LazyImage.scss';

const LazyImage = ({ src, alt, className, placeholder, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`lazy-image ${className || ''}`}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`lazy-image__img ${isLoaded ? 'lazy-image__img--loaded' : ''}`}
          {...props}
        />
      )}
      {!isLoaded && isInView && (
        <div className="lazy-image__placeholder">
          {placeholder || <div className="lazy-image__spinner" />}
        </div>
      )}
    </div>
  );
};

export default LazyImage;
