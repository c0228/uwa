import React, { useEffect } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import './index.css';

export const VideoPlayer = ({ src }) => {
 useEffect(() => {
  const topScreen = document.createElement('div');
  topScreen.id = 'videoplyr-top-screen';
  const bottomScreen = document.createElement('div');
  bottomScreen.id = 'videoplyr-bottom-screen';
  for (
   let i = 0;
   i < document.getElementsByClassName('plyr--video').length;
   i++
  ) {
   const targetElement = document.getElementsByClassName('plyr--video')[i];
   targetElement.appendChild(topScreen);
   targetElement.appendChild(bottomScreen);
  }
 }, []);
 return (
  <>
   <div style={{ position: 'relative' }}>
    <Plyr source={src} />
   </div>
  </>
 );
};
