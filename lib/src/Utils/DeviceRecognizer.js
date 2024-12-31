export const DeviceRecognizer = () => {
 const PageWidth = window.innerWidth;
 if (PageWidth < 576) {
  return 'xs';
 } else if (PageWidth >= 576 && PageWidth < 768) {
  return 'sm';
 } else if (PageWidth >= 768 && PageWidth < 992) {
  return 'md';
 } else if (PageWidth >= 992 && PageWidth < 1200) {
  return 'lg';
 } else if (PageWidth >= 1200 && PageWidth < 1400) {
  return 'xl';
 } else if (PageWidth > 1400) {
  return 'xxl';
 }
};
