import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './index.js'; // Adjust the path accordingly
import { getResponsiveStyle } from 'e-ui-react';
import '@testing-library/jest-dom';

const mockResponsiveStyleData = {
 "large":{
  12:"0.833vw",
 },
 "normal":{
  12:"12px"
 }
};

// Mock the getResponsiveStyle function
/* jest.mock('e-ui-react', () => ({
  getResponsiveStyle: jest.fn()
})); */

describe('Button Component', () => {  
 /* beforeEach(() => { // Reset mock before each test
    getResponsiveStyle.mockClear();
  }); */

  it('should render with default props [Smaller and Medium Screens]', () => {
    console.log("getResponsiveStyle: ",getResponsiveStyle(10));
    // const type="normal";
    // Simulate getResponsiveStyle for default case
    // getResponsiveStyle.mockReturnValue(mockResponsiveStyleData?.[type]?.[12]); // Simulate the result for all responsive style calls

    /* const { getByText } = render(<Button>Default Button</Button>);

    const button = getByText('Default Button');
    
    // Check default styles
    expect(button).toHaveClass('btn btn-default');
    expect(button).toHaveStyle('font-size: 12px');
   // expect(button).toHaveStyle('letter-spacing: 0.6vw');
    expect(button).toHaveStyle('letter-spacing: 1px');
   // expect(button).toHaveStyle('margin: 0.5vw');
    expect(button).toHaveStyle('margin: 8px'); */
  });

  /*
  it('should apply custom className', () => {
    const { getByText } = render(<Button className="custom-class">Custom Class Button</Button>);

    const button = getByText('Custom Class Button');

    // Check if custom class is applied
    expect(button).toHaveClass('custom-class');
  });

  it('should apply custom type', () => {
    const { getByText } = render(<Button type="primary">Primary Button</Button>);

    const button = getByText('Primary Button');

    // Check if custom type is applied
    expect(button).toHaveClass('btn btn-primary');
  });

  it('should apply custom size', () => {
    getResponsiveStyle.mockReturnValue('16px'); // Simulate the result for size
    
    const { getByText } = render(<Button size={16}>Sized Button</Button>);

    const button = getByText('Sized Button');

    // Check custom size style
    expect(button).toHaveStyle('font-size: 16px');
  });

  it('should apply custom margin and other styles', () => {
    const { getByText } = render(
      <Button style={{ margin: '10px', backgroundColor: 'blue' }}>Styled Button</Button>
    );

    const button = getByText('Styled Button');

    // Check if custom inline styles are applied
    expect(button).toHaveStyle('margin: 10px');
    expect(button).toHaveStyle('background-color: blue');
  });

  it('should render with children correctly', () => {
    const { getByText } = render(<Button>Click Me</Button>);

    const button = getByText('Click Me');

    // Check if button renders with children correctly
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it('should call getResponsiveStyle with correct arguments for responsive styles', () => {
    // Mock different screen widths
    getResponsiveStyle.mockReturnValueOnce('0.5vw'); // For margin
    getResponsiveStyle.mockReturnValueOnce('16px'); // For fontSize
    getResponsiveStyle.mockReturnValueOnce('0.6vw'); // For letterSpacing
    
    render(<Button size={16}>Responsive Button</Button>);

    // Test that getResponsiveStyle is called correctly
    expect(getResponsiveStyle).toHaveBeenCalledWith(0.5);
    expect(getResponsiveStyle).toHaveBeenCalledWith(16);
    expect(getResponsiveStyle).toHaveBeenCalledWith(0.6);
  });
 */
});
