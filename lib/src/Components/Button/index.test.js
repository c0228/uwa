import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Button } from './index.js'; // Adjust the path accordingly
import { getResponsiveStyle } from 'e-ui-react';
import '@testing-library/jest-dom';

// Mock data for getResponsiveStyle
const mockResponsiveStylesResult = {
  min_screen: {
    1: '1px',
    12: '12px',
    8: '8px',
    16: '16px',
    10: '10px',
  },
  max_screen: {
    1: '0.08vw',
    12: '1.00vw',
    8: '0.67vw',
    16: '1.33vw',
    10: '0.83vw',
  },
};

// Mock the getResponsiveStyle function
jest.mock('e-ui-react', () => ({
  getResponsiveStyle: jest.fn(),
}));

const screenSizes = ['min_screen', 'max_screen'];

  screenSizes.forEach((screenSize) => {
    const getStyle = (px) => mockResponsiveStylesResult[screenSize][px];
    describe(`Test on [ ${screenSize?.toUpperCase()} ]`, () => {
      beforeEach(() => {
        // Mock getResponsiveStyle behavior for the current screen size
        getResponsiveStyle.mockImplementation((px)=>getStyle(px));
      });

      afterEach(() => { // Cleanup after each test
        cleanup();
      });

      it('Button should render with children correctly', () => {
        const { getByText } = render(<Button>Click Me</Button>);
    
        const button = getByText('Click Me');
    
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click Me');
      });
    
      it('Button should apply custom className', () => {
        const { getByText } = render(<Button className="custom-class">Custom Class Button</Button>);
    
        const button = getByText('Custom Class Button');
    
        expect(button).toHaveClass('custom-class');
      });
    
      it('Button should apply custom type', () => {
        const { getByText } = render(<Button type="primary">Primary Button</Button>);
    
        const button = getByText('Primary Button');
    
        expect(button).toHaveClass('btn btn-primary');
      });

      it('Button should render with default props', () => {
        const { getByText } = render(<Button>Default Button</Button>);
        const button = getByText('Default Button');

        expect(button).toHaveClass('btn btn-default');
        expect(button).toHaveStyle(`font-size: ${getStyle(12)}`);
        expect(button).toHaveStyle(`letter-spacing: ${getStyle(1)}`);
        expect(button).toHaveStyle(`margin: ${getStyle(8)}`);
      });

      it('Button should apply custom size', () => {
        const { getByText } = render(<Button size={16}>Sized Button</Button>);
        const button = getByText('Sized Button');

        expect(button).toHaveStyle(`font-size: ${getStyle(16)}`);
      });

      it('Button should apply custom margin and other styles', () => {
        const { getByText } = render(
          <Button style={{ margin: getStyle(10), backgroundColor: 'blue' }}>
            Styled Button
          </Button>
        );

        const button = getByText('Styled Button');

        expect(button).toHaveStyle(`margin: ${getStyle(10)}`);
        expect(button).toHaveStyle('background-color: blue');
      });
    });
  });
