import { getResponsiveStyle } from './Styles.js'; // Adjust the import path accordingly

export const mockResponsiveStylesResult = {
 "minScreen":{
  title: 'should return px value when the screen width is less than or equal to 1200px',
  inputParams:{
    px: 100
  },
  expectedOutput: '100px'
},
"maxScreen":{
  title: 'should return vw value when the screen width is greater than 1200px',
  inputParams:{
    px: 100
  },
  expectedOutput: '8.33vw'
 }
}

describe('getResponsiveStyle', () => {
  // Iterate through the values of mockResponsiveStylesResult object
  Object.values(mockResponsiveStylesResult).forEach((result) => {
    it(result.title, () => {
      global.matchMedia = jest.fn(() => ({
        matches: (result===mockResponsiveStylesResult.minScreen),  // Simulate matchMedia for screens <= 1200px
      }));
      expect(getResponsiveStyle(result.inputParams.px)).toBe(result.expectedOutput);
    });
  });
});
