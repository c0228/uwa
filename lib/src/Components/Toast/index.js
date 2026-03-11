import React, { useEffect, useState } from "react";

const positionClassMap = {
  "top-right": "top-0 end-0",
  "top-left": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "middle-center": "top-50 start-50 translate-middle",
  "middle-left": "top-50 start-0 translate-middle-y",
  "middle-right": "top-50 end-0 translate-middle-y",
  "bottom-right": "bottom-0 end-0",
  "bottom-left": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x"
};

export const Toast = ({ message, position, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 1000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className={positionClassMap?.[position]} style={{ position:'absolute' }}>
    <div style={{
      background: "#333",
      color: "#fff",
      padding: "12px 16px",
      borderRadius: 6,
      zIndex: 9999
    }}>
      {message}
    </div>
    </div>
  );
};