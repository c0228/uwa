import React, { useRef, useEffect } from 'react';

export const LazyImage = ({ src, alt }) => {
 const imageRef = useRef(null);

 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      // Load the image
      entry.target.src = src;
      observer.unobserve(entry.target);
     }
    });
   },
   { rootMargin: '0px 0px 100px 0px' } // Adjust the rootMargin to trigger the image load earlier or later
  );

  if (imageRef.current) {
   observer.observe(imageRef.current);
  }

  return () => {
   if (imageRef.current) {
    observer.unobserve(imageRef.current);
   }
  };
 }, [src]);

 return <img ref={imageRef} src="placeholder.jpg" alt={alt} />;
};
