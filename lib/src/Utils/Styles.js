export const getResponsiveStyle = (px) =>{
  const mediaQuery = window.matchMedia('(max-width: 1200px)');
  return (mediaQuery?.matches)?px+'px':((px/1200)*100)+'vw';
};