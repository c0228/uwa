import React, { useState } from "react";
import "./index.css";

export const ZoomableImage = ({ src, zoom = 3 }) => {
  const [bgPosition, setBgPosition] = useState("0% 0%");
  const [showZoom, setShowZoom] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setBgPosition(`${x}% ${y}%`);
  };

  return (
    <div className="zoom-wrapper">
      {/* Base Image Layer */}
      <div
        className="image-layer"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <img src={src} alt="Product" />
      </div>

      {/* Zoom Layer */}
      {showZoom && (
        <div
          className="zoom-layer"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: bgPosition,
            backgroundSize: `${zoom * 100}%`,
          }}
        />
      )}
    </div>
  );
};
