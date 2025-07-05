import React from 'react';

/**
 * Consistent image container component that uses background-image for better control
 * 
 * @param {Object} props
 * @param {string} props.src - Image source path
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - Additional classes
 * @param {string} props.aspectRatio - Aspect ratio class (e.g., "aspect-square", "aspect-video")
 * @param {boolean} props.hover - Whether to add hover effect
 * @param {string} props.borderRadius - Border radius class (e.g., "rounded", "rounded-full")
 * @param {string} props.overlay - Overlay class (e.g., "bg-black/50")
 */
const ImageContainer = ({
  src,
  alt = '',
  className = '',
  aspectRatio = 'aspect-square',
  hover = false,
  borderRadius = 'rounded',
  overlay = '',
  children
}) => {
  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${borderRadius} ${className}`}>
      <div
        className={`w-full h-full bg-cover bg-center ${hover ? 'transition-transform duration-500 hover:scale-105' : ''}`}
        style={{ backgroundImage: `url('${src}')` }}
        role="img"
        aria-label={alt}
      />
      {overlay && (
        <div className={`absolute inset-0 ${overlay}`}></div>
      )}
      {children && (
        <div className="absolute inset-0 flex items-end">
          <div className="w-full">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
