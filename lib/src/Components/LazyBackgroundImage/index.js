import React, { useRef, useEffect } from 'react';
import './index.css';

export const LazyBackgroundImage = ({ src, alt, children, className }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('lazy-background-loaded');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={"lazy-background "+className} style={{ backgroundImage: `url(${src})` }}>
      {children}
    </div>
  );
};

