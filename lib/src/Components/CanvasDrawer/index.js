import React, { useRef, useState, useEffect } from 'react';

export const CanvasDrawer = () => {
 const canvasRef = useRef(null);
 const [prevOffset, setPrevOffset] = useState({});
 const [mouseX, setMouseX] = useState();
 const [mouseY, setMouseY] = useState();
 const handleMouseMove = (e) => {
  setMouseX(e.clientX);
  setMouseY(e.clientY);
 };
 useEffect(() => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  canvas.addEventListener('click', (event) => {
   const { offsetX, offsetY } = event;
   // setPrevOffset({ offsetX:offsetX , offsetY: offsetY });

   context.moveTo(offsetX, offsetY);
   //  context.lineTo(offsetX+50, offsetY+50);
   //  context.stroke();
  });
  canvas.addEventListener('mousemove', (event) => {
   const { offsetX, offsetY } = event;
   // setPrevOffset({ offsetX:offsetX , offsetY: offsetY });

   // context.moveTo(offsetX, offsetY);
   context.lineTo(offsetX + 50, offsetY + 50);
   context.stroke();
  });
 }, []);

 return (
  <>
   <canvas
    ref={canvasRef}
    width="200"
    height="200"
    onMouseMove={(e) => handleMouseMove(e)}
    style={{ border: '1px solid #ccc' }}
   />
   <div>
    {mouseX} {mouseY}
   </div>
  </>
 );
};
