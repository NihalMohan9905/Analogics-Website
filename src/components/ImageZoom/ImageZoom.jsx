// ================================
// Image Zoom Component - Analogics Website
// ================================

import { useState, useRef } from 'react';
import './ImageZoom.css';

const ImageZoom = ({
  src,
  alt,
  className = '',
  zoomLevel = 2.5,
  lensSize = 150
}) => {
  const [isZooming, setIsZooming] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate lens position (centered on cursor)
    const lensX = x - lensSize / 2;
    const lensY = y - lensSize / 2;

    setLensPosition({ x: lensX, y: lensY });
    setBackgroundPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  return (
    <div
      className={`image-zoom ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="image-zoom__img"
      />

      {isZooming && imageRef.current && (
        <div
          className="image-zoom__lens"
          style={{
            width: `${lensSize}px`,
            height: `${lensSize}px`,
            left: `${lensPosition.x}px`,
            top: `${lensPosition.y}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${imageRef.current.width * zoomLevel}px ${imageRef.current.height * zoomLevel}px`,
            backgroundPosition: `-${backgroundPosition.x * zoomLevel - lensSize / 2}px -${backgroundPosition.y * zoomLevel - lensSize / 2}px`,
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;
