import { getResponsiveStyle } from './Styles.js'; // Adjust the import path accordingly

describe('getResponsiveStyle', () => {
  it('should return px value when the screen width is less than or equal to 1200px', () => {
    // Mock window.matchMedia to simulate a screen width of less than 1200px
    global.matchMedia = jest.fn(() => ({
      matches: true,  // Simulate matchMedia for screens <= 1200px
    }));

    const px = 100;
    const result = getResponsiveStyle(px);

    expect(result).toBe('100px');
  });

  it('should return vw value when the screen width is greater than 1200px', () => {
    // Mock window.matchMedia to simulate a screen width of greater than 1200px
    global.matchMedia = jest.fn(() => ({
      matches: false,  // Simulate matchMedia for screens > 1200px
    }));

    const px = 100;
    const result = getResponsiveStyle(px);

    expect(result).toBe('8.33vw'); // (100 / 1200) * 100 = 8.33vw
  });
});
